import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';

const Service=EmberObject.extend({
  services:null,
  countActive:computed('services.@each.active',function(){
    let activeServices=this.get('services').filter(
      service=>service.active
    );
    return activeServices.length;
}),
  sumActive:computed('services.@each.active',function(){
    let totalPrice=0;
    this.get('services').forEach(service=>{
      if(service.active){
        totalPrice += service.price
      }
    });
    return totalPrice;
  }),
  codePromo:null,
  promos:null,
  tauxReduction:computed('codePromo','promos',function(){
    return this.get('promos')[this.get('codePromo')];
  })
});

export default Route.extend({
  model(){
    return Service.create({
      services:[
      {
        "name": "Web Development",
        "price": 300,
        "active":true
      },{
        "name": "Design",
        "price": 400,
        "active":false
      },{
        "name": "Integration",
        "price": 250,
        "active":false
      },{
        "name": "Formation",
        "price": 220,
        "active":false
      }
    ],
    promos:{
        "B22":0.05,
        "AZ":0.01,
        "UBOAT":0.02
      }
    });
  }
});
