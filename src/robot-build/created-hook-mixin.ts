import { Component, Vue } from 'vue-property-decorator';


@Component
class CreatedHookMixin extends Vue {
    created() {
        console.log("**** component created *****");
    }
}

export default CreatedHookMixin;