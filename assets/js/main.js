const $= document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)
const navs=$$('.header__nav-item')
const nav_active= $('.header__nav--active')
const lists=$$('.header__nav-sub-list')
const wapper= document.querySelector('.wapper')
const titles=$$('.container__event-head-item')
const info=$$('.container__event-title-item')
const characters= $$('.container__character-item')
const transfer_next = $('.container__character-next')
const transfer_pre = $('.container__character-pre')
const dots= $$('.container__character-dots-item')
const navss=$$('.nav')


console.log(transfer_next)
const app={
    currentIndex:0,
    isPlaying:false,
    isCheck:false,
    handleEvent: function(){
        _this=this
        //Xử lý click wapper
        wapper.onclick = function(){
            _this.isPlaying=!_this.isPlaying
            wapper.classList.toggle('active',_this.isPlaying)
        },
        navs.forEach((nav,index) => {
            nav.onclick = ()=>{
                _this.isCheck=!_this.isCheck
                const nav_list=$('.header__nav-item-icon')
                if(_this.isCheck){
                if(nav_list){
                    lists[index-1].style.display = "block"
                }
                }
                else{
                    lists[index-1].style.display = "none"
                }
            }
        }),
        
        titles.forEach((title,index) => {
           const titleactive= info[index]
            title.onclick=function(){
                $('.info--active').classList.remove('info--active')
                $('.container__event--avtive').classList.remove('container__event--avtive')
            
                titleactive.classList.add('container__event--avtive')
                this.classList.add('info--active')

            }
        
        }),
        transfer_next.onclick= function(){
            _this.nextCharacter()
        },
        transfer_pre.onclick = function(){
            _this.preCharacter()
        },
        dots.forEach((dot,index) => {
            dot.onclick = function(){
                $('.dots--active').classList.remove('dots--active')
                this.classList.add('dots--active')
                $('.container__character--active').classList.remove('container__character--active')
                characters[index].classList.add('container__character--active')
                _this.currentIndex=index
                if(index==0){
                    transfer_next.classList.add('transfer--active')
                    transfer_pre.classList.remove('transfer--active')
                }
                else if(index==3){
                    transfer_next.classList.remove('transfer--active')
                    transfer_pre.classList.add('transfer--active')
                }
                else{
                    transfer_pre.classList.add('transfer--active')
                    transfer_next.classList.add('transfer--active')
                }
            }
        })
    },
    nextCharacter: function(){
        this.currentIndex++
        if(this.currentIndex>= 4){
            this.currentIndex=0
        }
        $('.container__character--active').classList.remove('container__character--active')
        characters[this.currentIndex].classList.add('container__character--active')
        if(this.currentIndex !==0){
            transfer_pre.classList.add('transfer--active')
        }
        else{
            transfer_pre.classList.remove('transfer--active')
        }
        if(this.currentIndex ==3){
            transfer_next.classList.remove('transfer--active')
        }
        $('.dots--active').classList.remove('dots--active')
        dots[this.currentIndex].classList.add('dots--active')
    },
    preCharacter: function(){
        this.currentIndex--
        if(this.currentIndex<0){
            this.currentIndex=3
        }
        $('.container__character--active').classList.remove('container__character--active')
        characters[this.currentIndex].classList.add('container__character--active')
        if(this.currentIndex !==3){
            transfer_next.classList.add('transfer--active')
        }
        if(this.currentIndex==3){
            transfer_next.classList.remove('transfer--active')
        }
        if(this.currentIndex ==0){
            transfer_pre.classList.remove('transfer--active')
        }
        $('.dots--active').classList.remove('dots--active')
        dots[this.currentIndex].classList.add('dots--active')
    },
    start: function(){
        this.handleEvent()
    },
}

app.start()