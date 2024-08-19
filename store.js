import { reactive } from 'vue'
import { Octokit } from 'octokit';



const store = reactive({
    octokit: new Octokit({
        auth: import.meta.env.VITE_API_KEY
    }),
    data: {
        projects: [],
        image: [],
      
        fetchdata(page, per_page) {
           store.octokit.request(`GET /user/repos?page=${page}&per_page=${per_page}`, {
                // owner: 'pietrocruciata',
                // repo: 'laravel-api',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }

            }).then((res) => {

                // console.log(res);
                this.projects = res.data
                // console.log(this.projects);
            }).then(() => {
                
                for (let i = 0; i < this.projects.length; i++) {
                    store.octokit.request(`GET /repos/pietrocruciata/${this.projects[i].name}/contents/${this.projects[i].name}.png`, {
                        // owner: 'pietrocruciata',
                        // repo: 'laravel-api',
                        headers: {
                            'X-GitHub-Api-Version': '2022-11-28'
                        }

                    }).then((res) => {
                        console.log(res);
                        
                        this.projects[i]['image'] = res.data.download_url
                        console.log( this.projects);
                        
                    })
                }
            })


        },




    }
});




export default store