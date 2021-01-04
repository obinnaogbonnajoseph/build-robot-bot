import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
@Module({ namespaced: true})
export default class Users extends VuexModule {
    user = null;

    @Mutation
    updateCurrentUser(user: any) {
        this.user = user;
    }

    get foo(): string {
        return `users-getter/${this.foo}`;
    }

}