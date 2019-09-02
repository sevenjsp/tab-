/* 
  用类的继承实现tab栏的自动切换
*/

class AutoTab extends Tab {
  constructor(selector, opt) {
    super(selector, opt)
    this.index = 0;

    // 暂停自动切换
    this.stopTab = this.event;
    // 恢复自动切换
    this.oppnTab = this.opt.oppnTab || 'mouseout'

    this.stopId = null;
    // 自动切换的事件设置
    this.time = this.opt.time || 1500;


    this.autoTabPlay()
    this.stopAutoTabPlay()
  }


  autoTabPlay() {

    this.stopId = setInterval(() => {
      this.index++;
      this.index %= this.navItems.length;
      this.changeCategoryStyle(this.navItems[this.index]);
      this.changeContentStyle(this.index);
    }, this.time)
  }

  stopAutoTabPlay() {

    this.container.addEventListener(this.stopTab, ele => {
      clearInterval(this.stopId);

      this.navItems.forEach((element, i) => {
        if (ele.target === element) {
          this.index = i;
        }
      })
    })

    // 恢复自动切换
    this.container.addEventListener(this.oppnTab, e => {
      this.autoTabPlay();
    })
  }



}