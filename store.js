import { reactive } from 'vue'
import { Octokit } from 'octokit';



const store = reactive({

    data: {
        projects: [],
        // project:[],

        octokit: new Octokit({
            auth: import.meta.env.VITE_API_KEY
        }),

        fetchdata(page, per_page) {
            this.octokit.request(`GET /user/repos?page=${page}&per_page=${per_page}`, {
                // owner: 'pietrocruciata',
                // repo: 'laravel-api',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }

            }).then((res) => {

              console.log(res);
                this.projects = res.data
                console.log(this.projects);



            })
            // console.log(this.projects.data.name);

        },
        // singolarProject() {
        //     this.octokit.request(`GET /repos/{owner}/{repo}`, {
        //         owner: 'pietrocruciata',
        //         repo: 'db-first',
        //         headers: {
        //             'X-GitHub-Api-Version': '2022-11-28'
        //         }

        //     }).then((res) => {

        //         console.log(res)
        //         this.project = res.data
        //         console.log(this.project);
               



        //     })
        // },

    }
});




export default store