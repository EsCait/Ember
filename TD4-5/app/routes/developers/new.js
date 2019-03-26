import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object';

export default Route.extend({
	model(){
		return {copy:{}};
	},
	actions:{
		save(model){
			let copy=model.copy;
			let dev=this.store.createRecord('developer',EmberObject.create(copy));
			dev.save().then(set(model, "copy", {}));
		}
	}
});
