import { Pipe, PipeTransform } from '@angular/core';
import { Writer } from './writer';

@Pipe({
  name: 'writerfilter'
})
export class WriterfilterPipe implements PipeTransform {

  transform(value: Writer[], filterText?: string): Writer[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : undefined;

    return filterText ? value.filter((w: Writer) => w.username.toLocaleLowerCase().indexOf(filterText) !== -1) : value;

}
}
