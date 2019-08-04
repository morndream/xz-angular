import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonSlides } from '@ionic/angular';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  private carouselItems=[];
  private newArrivalItems=[];
  private recommendedItems=[];
  private topSaleItems=[];
  slideOpts={
    initialSlide: 0, //初始选择第几个广告
    speed: 400,  //滑动速度(毫秒)
  }
  // 在组件脚本中引用自己模板中的视图子组件
  @ViewChild(IonSlides,{static:true})
  private mySlides:IonSlides;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    //首页组件初始化时，异步请求服务器端的首页数据
    let url='http://www.codeboy.com/data/product/index.php';
    this.http.get(url).subscribe((res:any)=>{
      // console.log(res);
      this.carouselItems=res.carouselItems;
      this.newArrivalItems=res.newArrivalItems;
      this.recommendedItems=res.recommendedItems;
      this.topSaleItems=res.topSaleItems;
      // console.log(this.carouselItems)
      // console.log(this.newArrivalItems)
      // console.log(this.recommendedItems)
      // console.log(this.topSaleItems)
      // 开始轮播广告的自动播放
      // console.log(this.mySlides)
      this.mySlides.startAutoplay();
    })

  }

}
