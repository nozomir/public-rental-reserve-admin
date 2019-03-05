import { CheckBoxType } from './types';

export namespace Const.Book {
  export const RESERVE_TYPE: CheckBoxType = [
    { id: '0', selected: true, text: 'キッチン', code: 'kitchen' },
    { id: '1', selected: true, text: 'MTG利用', code: 'mtg' },
    { id: '2', selected: true, text: '一般利用', code: 'ordinal' },
  ];

  export const STATUS: CheckBoxType = [
    { id: '0', selected: true, text: '受付', code: 'accepted' },
    { id: '1', selected: true, text: '確定', code: 'completed' },
    { id: '2', selected: true, text: 'キャンセル', code: 'canceled' },
  ];

  export const PAID: CheckBoxType = [
    { id: '0', selected: true, text: '未払い', code: 'paid' },
    { id: '1', selected: true, text: '支払済', code: 'not_paid' },
  ];
}
