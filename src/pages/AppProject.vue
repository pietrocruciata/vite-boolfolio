<template>
    <div>
        show
    </div>
    <div>
      {{ project.name}}
    </div>
</template>

<script>
import store from '../../store';
export default {

    data() {
        return {
            store,
            project:[],
        }
    },
    props: {
    item: {
      type: Object
    }

  },
    methods: {
        // fetchdata() {
        //     this.store.octokit.request(`GET /repos/{owner}/${this.project[i].id}`, {
        //         owner: 'pietrocruciata',
        //         headers: {
        //             'X-GitHub-Api-Version': '2022-11-28'
        //         }

        //     }).then((res) => {
        //         console.log(res);
        //         this.project = res.data
        //         console.log(this.project);
        //     })
          

        // },
        addproject(){
            for (let i = 0; i < this.store.data.projects.length; i++) {
                    store.octokit.request(`GET /repos/pietrocruciata/${this.store.data.projects[i].name}/contents/${this.store.data.projects[i].name}.png`, {
                        // owner: 'pietrocruciata',
                        // repo: 'laravel-api',
                        headers: {
                            'X-GitHub-Api-Version': '2022-11-28'
                        }

                    }).then((res) => {
                        console.log(res);
                        
                        this.project = res.data.name
                        console.log( this.project);
                        
                    })
                }
            
        
        }
        
    },
    mounted() {
    this.addproject()
    }
}
</script>

<style lang="scss" scoped></style>