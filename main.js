'use strict';


class Spoiler {
    constructor ({wrapper, title, block, animationTime = 1000}){
        this.wrapper = document.querySelector(wrapper);
        this.title = this.wrapper.querySelector(title);
        this.block = this.wrapper.querySelector(block);
        this.animationTime = animationTime;
        this.blockHeits = this.block.clientHeight;
    }

    createStyle() {
        let styles = `
        <style>
                .active {
                    color: #fff;
                }

                .hidden{
                    overflow: hidden;
                    height:0;
                    padding:0 30px;
                }

                .open{
                    animation-name: op;
                    animation-duration: ${this.animationTime}ms;
                }

                .close{
                    animation-name: op;
                    animation-duration: ${this.animationTime}ms;
                    animation-direction: reverse;
                }

                @keyframes op {
                    from {
                        opacity:0;
                        height: 0;
                        padding: 0 30px;
                    }
                    to {
                        opacity:1;
                        height: ${this.blockHeits}px;
                        padding: 30px 30px;
                    }
                }
        </style>
        
        `;

        document.head.insertAdjacentHTML('beforeend', styles);

    }


    defaultState(){
        this.block.style.display = 'none';
    }


    toggleTitle(){
        
        this.title.classList.toggle('active');

        if (this.title.matches('.active')){
            this.block.style.display = 'block';
            this.block.classList.add('hidden');
            this.block.classList.add('open');
            setTimeout(()=>{
                this.block.classList.remove('hidden');
            this.block.classList.remove('open');
            },this.animationTime)
        } else {
            this.block.classList.add('close');
            setTimeout(()=>{
            
            this.block.classList.remove('close');
            this.block.style.display = 'none';
            },this.animationTime)
            
        }

    }


    init(){
        console.dir(this);
        this.createStyle();
        this.defaultState();
        this.title.addEventListener('click', this.toggleTitle.bind(this));

    }

}


