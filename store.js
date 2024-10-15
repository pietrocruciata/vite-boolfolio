import { reactive } from 'vue'
import { Octokit } from 'octokit';



const store = reactive({
    octokit: new Octokit({
        auth: import.meta.env.VITE_API_KEY
    }),
    data: {
        projects: [],
        image: [],
        viewProjects: [],
        projectsingle: '',


        async fetchdata() {


            await store.octokit.request(`GET /user/repos?per_page=1000`, {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28',
                    'Authorization': `token ${this.auth}`
                }
            }).then((res) => {
                this.projects = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            }).then(() => {
                for (let i = 0; i < this.projects.length; i++) {

                    store.octokit.request(`GET /repos/${this.projects[i].owner.login}/${this.projects[i].name}/contents/status`, {
                        headers: {
                            'X-GitHub-Api-Version': '2022-11-28',
                            'accept': 'application/vnd.github+json'

                        }

                    }).then((res) => {
                        // console.log(atob(res.data.content));

                        const status = atob(res.data.content)
                        // this.projects[i]['status'] = status
                        // console.log(status);

                        if (status !== 'none') {
                            this.viewProjects.push(this.projects[i])
                        }
                    })

                }
                // console.log(this.viewProjects);

            })
                .then(() => {

                    for (let i = 0; i < this.projects.length; i++) {
                        store.octokit.request(`GET /repos/${this.projects[i].owner.login}/${this.projects[i].name}/contents/${this.projects[i].name}.png`, {
                            // owner: 'pietrocruciata',
                            // repo: 'laravel-api',
                            headers: {
                                'X-GitHub-Api-Version': '2022-11-28'
                            }

                        }).then((res) => {
                            // console.log(res);

                            this.projects[i]['image'] = res.data.download_url
                            // console.log(this.projects);

                        })
                    }
                })


        },


        async fetchproject(id) {
            await store.octokit.request(`GET /repositories/${id}`, {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28' 
                }
            }).then((response) => {
                this.projectsingle = response.data;
                // console.log('response: ', this.projectsingle);
            }).then(() => {
                store.octokit.request(`GET /repositories/${id}/languages`).then((res) => {
                    this.projectsingle['all_languages'] = Object.keys(res.data);
                    // console.log('ciaociaociao: ', this.projectsingle);
                })
            }).then(() => {
                store.octokit.request(`GET /repositories/${id}/contents/${this.projectsingle.name}.png`, {
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28' 
                    }
                }).then((response) => {
                    this.projectsingle['image'] = response.data.download_url;
                    // console.log(this.projectsingle);
                })
            });
        }
        




    }
});




export default store