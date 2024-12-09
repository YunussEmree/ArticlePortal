import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../../components/article-section/article';
import { filter } from 'rxjs';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(value: Article[], filterText?: string): Article[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : undefined;

    return filterText ? value.filter((a: Article) => a.content.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
