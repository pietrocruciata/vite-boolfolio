import { reactive } from 'vue'
import { Octokit } from 'octokit';



const store = reactive({
    octokit: new Octokit({
        auth: import.meta.env.VITE_API_KEY
    }),
    data: {
        projects: [],
        image: [],
        projectsingle: '',


        async fetchdata() {

         
                await store.octokit.request(`GET /user/repos?per_page=1000`, {
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                }).then((res) =>{
                    this.projects = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                    console.log(this.projects); 
              
                });
            
            
        
               
                
        
        
            //  .then(() => {

            //     for (let i = 0; i < this.projects.length; i++) {
            //         store.octokit.request(`GET /repos/pietrocruciata/${this.projects[i].name}/contents/${this.projects[i].name}.png`, {
            //             // owner: 'pietrocruciata',
            //             // repo: 'laravel-api',
            //             headers: {
            //                 'X-GitHub-Api-Version': '2022-11-28'
            //             }

            //         }).then((res) => {
            //             console.log(res);

            //             this.projects[i]['image'] = res.data.download_url
            //             console.log(this.projects);

            //         })
            //     }
            // })


        },

        async fetchproject(i) {
            await store.octokit.request(`GET /repositories/${this.projects[i].id}`, {
                // owner: 'pietrocruciata',
                // repo: 'laravel-api',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }

            }).then((res) => {

                // console.log(res);
                this.projectsingle = res.data

            }).then(() => {
                store.octokit.request(`GET /repos/${this.projects[i].full_name.split('/')[0]}/${this.projects[i].name}/languages`).then((res) => {
                    this.projectsingle['all_languages'] = Object.keys(res.data)

                    console.log(this.projectsingle);

                })

            })
        }




    }
});




export default store