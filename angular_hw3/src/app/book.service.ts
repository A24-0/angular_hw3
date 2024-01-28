import {Injectable} from '@angular/core';
import {BookLocation} from './booklocation';
@Injectable({
  providedIn: 'root',
})
export class BookService {

  protected bookLocationList: BookLocation[] = [
    {
      id: 0,
      name: 'Гибкие продажи',
      description: 'Как продавать в эпоху перемен" авторства Джила Конрата. Эта книга поможет вам точно определить ключевые навыки и информацию, выявить самые эффективные методики продаж и найти свежие решения проблем, ограничивающих ваше развитие в сфере продаж',
      price: 1790.32,
    },
    {
      id: 1,
      name: 'Построение отдела продаж',
      description: 'С "нуля" до максимальных результатов". Эта книга обучает, как перестать зависеть от результата переговоров, который вы не можете контролировать, и сконцентрироваться на том, чем вы можете управлять, на собственном поведении.',
      price: 4028.22,
    },
    {
      id: 2,
      name: 'Охота на покупателя',
      description: 'Самоучитель менеджера по продажам" автора Александра Деревицкого. Эта книга предназначена для тех, кто хочет научиться эффективно взаимодействовать с покупателями и увеличить продажи.',
      price: 4000,
    },
    {
      id: 3,
      name: 'Создание и издание книги с помощью программы Microsoft Word',
      description: 'Эта книга предлагает подробное руководство по использованию Microsoft Word для создания и издания книг',
      price: 750.7,

    },
  ];

  getAllBookLocations(): BookLocation[] {
    return this.bookLocationList;
  }

  getBookLocationById(id: number): BookLocation | undefined {
    return this.bookLocationList.find((bookLocation) => bookLocation.id === id);
  }
}
