import Ember from 'ember';

export function formatDate(params/*, hash*/) {
    console.log('bbbbbbbbbbb',params);
    // console.log('aaaaaaa',moment(params[0]).fromNow());
  return moment(params[0]).format('YYYY-MM-DD');
}

export default Ember.Helper.helper(formatDate);
