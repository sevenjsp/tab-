/* 
使用类实现tab栏的封装
*/

class Tab {
  /*
  navClass 是列表分类的类名 
  event 事件类型
  currentClass 分类样式
  contentClass 是内容分类
   */
  constructor(selector, opt) {

    this.opt = opt || {}

    this.navClass = this.opt.navClass || '.nav-item';

    // 事件类型
    this.event = this.opt.event || 'mouseover';

    // 分类的current的样式
    this.currentClass = this.opt.currentClass || 'current';

    // 内容分分类
    this.contentClass = this.opt.contentClass || '.item';
    this.show = this.opt.show || 'show';


    this.container = document.querySelector(selector)

    this.navItems = this.container.querySelectorAll(this.navClass);

    this.contents = this.container.querySelectorAll(this.contentClass);

    this.addEvent()
  }

  addEvent() {
    this.navItems.forEach((e, i) => {
      e.addEventListener(this.event, ele => {
        // 修改类样式的方法
        // ele.target 是我的事件目标
        this.changeCategoryStyle(ele.target);
        // 修改内容样式
        this.changeContentStyle(i);
      })
    })
  }


  // 修改分类样式
  changeCategoryStyle(target) {
    this.navItems.forEach(e => {
      e.classList.remove(this.currentClass);
    });
    target.classList.add(this.currentClass);
  }


  // 修改内容样式的分类
  changeContentStyle(i) {
    this.contents.forEach(e => {
      e.classList.remove(this.show);
    });
    this.contents[i].classList.add(this.show);
  }


}