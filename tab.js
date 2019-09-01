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
  constructor(navClass, event, currentClass, contentClass, show) {
    this.navClass = navClass;

    // 事件类型
    this.event = event;

    // 分类的current的样式
    this.currentClass = currentClass;

    // 内容分分类
    this.contentClass = contentClass;
    this.show = show;


    this.navItems = document.querySelectorAll(this.navClass);

    this.contents = document.querySelectorAll(this.contentClass);
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