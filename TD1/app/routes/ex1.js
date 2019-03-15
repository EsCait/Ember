import Route from '@ember/routing/route';             //Problème de ESLint avec WebStorm qui fait que les import déconnent
import EmberObject, {computed} from '@ember/object';

const Note=EmberObject.extend({
  content: 'Aucun',
  MAX: 100,
  info: null,
  size: computed('content', function () {
    this.set('info',null);
    return this.MAX - this.content.length;
  }),
  style: computed('size',function(){
  let style='info';
  if(this.size<20){
    return 'danger';
  } else if (this.size<50) {
    return 'warning';
  }
  return 'info'
  })
})


export default Route.extend({
  model(){
    return Note.create();
  }
});
