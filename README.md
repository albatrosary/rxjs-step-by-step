```
npm install @ngrx/store --save
npm install @ngrx/store-devtools --save
npm install @ngrx/schematics --save-dev
npm install @ngrx/{store,effects,entity,store-devtools} --save

ng generate @ngrx/schematics:action ActionName --creators
ng generate @ngrx/schematics:reducer ReducerName --creators
ng generate @ngrx/schematics:effect EffectName --creators
ng generate @ngrx/schematics:entity EntityName --creators
ng generate @ngrx/schematics:feature FeatureName --creators

ng g module contents/sample --routing
ng g component contents/sample/ui

ng generate @ngrx/schematics:store contents/sample/state --root --module sample.module.ts
ng generate @ngrx/schematics:action contents/sample/action --creators
ng generate @ngrx/schematics:reducer contents/sample/reducer --module contents/sample/sample.module.ts --creators
ng generate @ngrx/schematics:effect contents/sample/effect --root --module contents/sample/sample.module.ts --creators
ng generate @ngrx/schematics:entity contents/sample/ui --module sample.module.ts --creators
ng generate @ngrx/schematics:feature contents/sample/ui/ui --module contents/sample/sample.module.ts --creators
```
