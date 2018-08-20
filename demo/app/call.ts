import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { CallViewModel } from './call-view-model';
import { NavigatedData } from 'tns-core-modules/ui/page';
import * as settings from 'tns-core-modules/application-settings';
let page;
let model: CallViewModel;
let context;

export function navigatingTo(args: NavigatedData) {
  page = <pages.Page>args.object;
  context = page.navigationContext;
}

export function pageLoaded(args: observable.EventData) {
  if (context.from.indexOf(settings.getString('me')) > -1) {
    model = new CallViewModel(context.from, context.to);
    model.call(context.to);
  } else {
    model = new CallViewModel(context.to, context.from);
    model.answer(context.from, context.to, context.sdp, context.type);
  }
  page.bindingContext = model;

  model.on('localStream', args => {
    const localVideo = page.getViewById('localVideoView') as any;
    localVideo.mirror = true;
    const localStream = model.localStream;
    localVideo.stream = localStream;
  });
}
