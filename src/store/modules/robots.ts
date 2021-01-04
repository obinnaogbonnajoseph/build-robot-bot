import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
@Module({ namespaced: true})
export default class Robot extends VuexModule {
    cart: any = [];
    parts = null;

    @Mutation
    addRobotToCart(robot: any) {
        this.cart.push(robot);
    }

    @Mutation
    updateParts(parts: any) {
        this.parts = parts;
    }

    get cartSaleItems(): any {
        return this.cart.filter((item:any) => item.head.onSale);
    }

    get foo(): string {
        return `robots-getter/${this.foo}`;
    }

}