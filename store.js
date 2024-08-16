import { reactive } from 'vue'
import { Octokit } from 'octokit';



const store = reactive({

    data: {
        projects: [],

        octokit: new Octokit({
            auth: import.meta.env.VITE_API_KEY
        }),

        fetchdata(page) {
            this.octokit.request(`GET /user/repos?page=${page} `, {
                // owner: 'pietrocruciata',
                // repo: 'laravel-api',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }

            }).then((res) => {

                console.log(res)
                this.projects = res.data



            })
            // console.log(this.projects.data.name);

        },
        // singolarProject(name) {
        //     this.octokit.request(`GET /repos/{owner}/{repo}`, {
        //         owner: 'pietrocruciata',
        //         repo: `${name}`,
        //         headers: {
        //             'X-GitHub-Api-Version': '2022-11-28'
        //         }

        //     }).then((res) => {

        //         console.log(res)
        //         this.projects = res.data



        //     })
        // },

    }
});




export default store