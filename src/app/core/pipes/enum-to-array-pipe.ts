import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
    transform(value: any): { key: string, value: string }[] {
        if (value) {
            return Object.keys(value)
                .map(key => {
                    return {
                        key,
                        value: value[key],
                    };
                });
        }
        return value;
    }
}
