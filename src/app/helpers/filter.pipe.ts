import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterAll'})
export class FilterAllPipe implements PipeTransform {
    transform(list, field: string, value: string): any {
        let items = [];


        if (!list.length || !value.length) {
            return list;
        }

        list.map((item) => {
            if (item[field] === value) {
                items.push(item);
            }
        });

        return items;
    }
}
