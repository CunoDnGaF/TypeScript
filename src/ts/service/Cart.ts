import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    total(): number {
        let total  = this.items.reduce((i,j) => i + j.price, 0);
        
        return total;
    }

    discountTotal(discount: number): number {
        let total : number = this.total();
        total = total - total*(discount/100);
        return total;
    }

    deliteItem(id: number): void {
        this._items = this._items.filter((item) => item.id !== id);
    }
}