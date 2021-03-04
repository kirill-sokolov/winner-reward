# WinnerReward

##Todos:
- добавить слайдер
- добавить анимацию победы
- показывать награду в попапе
- возможно анимация в попапе
- все картинки дата атрибутом
- добавить помидоры (25-50 минут) + 5-10 минут отдых
- помидоры подавали звуковой сигнал, будучи открытой вкладкой в браузере
- *2-16 помидоров = награда
- Поднять билд ang10, ns preview, ng serve как у Time burner
- Добавить scss

## Development server
- Run `ng serve` for a dev server
- Run `ng build + node server.js` to start on node
- Navigate to `http://localhost:4080/`. The app will automatically reload if you change any of the source files.

## To open from mobile
    ng serve --host 0.0.0.0

    from your machine: localhost:4200
    from your phone: 192.168.1.199:4200

##used libs:
https://www.npmjs.com/package/canvas-confetti

alternatively can use http://www.schillmania.com/projects/fireworks/


##варианты рулетки
https://codepen.io/ciricc/pen/ZxQEzP
https://codepen.io/disus/pen/RwaejZe

http://demo.st-marron.info/roulette/sample/demo.html

## ViewChild
    @Component({
        selector: 'my-component',
        template: '<div #element></div>',
    })
    export class MyComponent {
        @ViewChild('element', {read: ViewContainerRef}) private anchor: ViewContainerRef;
    
        constructor(private resolver: ComponentFactoryResolver) { }
    
        whatever() {
            let factory = this.resolver.resolveComponentFactory(ChildComponent);
            this.anchor.createComponent(factory);
        }
    }
