import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { CallViewModel } from './call-view-model';
import { NavigatedData } from 'tns-core-modules/ui/page';
import { SocketService } from '~/socket-server';

let page;
let model: CallViewModel;
let context;

export function navigatingTo(args: NavigatedData) {
  page = <pages.Page>args.object;
  context = page.navigationContext;
}

export function pageLoaded(args: observable.EventData) {
  model = new CallViewModel();
  page.bindingContext = model;
  if (context.to.indexOf(SocketService.me) > -1) {
    model.answer(context.from, context.to, context.sdp);
  } else {
    model.call(context.to);
  }
}
