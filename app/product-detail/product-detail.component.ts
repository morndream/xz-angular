import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  // 等待查询的商品编号--来自于商品列表页
  private pid='';
  private details=[];
  // private family=[];
  private lname='';//产品型号
  private picList=[];//轮播图图片
  private title='';//标题
  private subtitle=''//产品副标题
  private price=''//价格
  private detailsPic='';//详情图片
  
  
  slideOpts:{
    initialSlide: 0, //初始选择第几个广告
    speed: 400,  //滑动速度(毫秒)
  }
  @ViewChild(IonSlides,{static:true})
  private mySlides:IonSlides;

    // 在组件脚本中引用自己模板中的视图子组件
  constructor(
    private route:ActivatedRoute,
    private http:HttpClient,
    private nav:NavController
    ) { }

  ngOnInit() {
    // 读取商品列表传递来的商品编号----路由参数
    this.route.params.subscribe((data)=>{
      this.pid=data.pid;
    })
    // 根据商品编号查询商品详情
    //http://www.codeboy.com/data/product/details.php?lid=1
    let url='http://www.codeboy.com/data/product/details.php?lid='+this.pid
    this.http.get(url).subscribe((res:any)=>{
      this.lname=res.details.lname;
      this.picList.push(res.details.picList);
      this.title=res.details.title;
      this.subtitle=res.details.subtitle;
      this.details.push(res.details);
      this.price=res.details.price;
      this.mySlides.startAutoplay();
       var t=res.details.details
       this.detailsPic=t.replace(/img\/product\/detail/g,"http://www.codeboy.com/img/product/detail");
    })
  }
  goBack(){
    this.nav.back();
  }

}
