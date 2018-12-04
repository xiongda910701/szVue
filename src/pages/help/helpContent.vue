<template>
  <div class="container">
    <div class="content">
      <div class="tab-box">
        <h1>帮助中心</h1>
        <div class="item-box">
          <div class="item"
               v-for="(item,$index) in tabList"
               :key="item.id"
               :class="item.isActive?'active':''"
               @click="changeTab($index)"
          >
            {{item.text}}
          </div>
        </div>
      </div>
      <div class="list-box">
        <div v-show="listBoxItemState[0]" class="list-box-item">
          <div class="item-list">
            <div class="title"  @click="showAnswer(0)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>平台如何保障数据的真实性？</div>
            <div v-show="answerState[0].isShow" class="Answer">
              <img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                神赞管理团队具有超过十年的丰富互联网广告反作弊经验，建立了独到的反作弊数据模型，采用大数据技术多维度比对分析，结合人工核查处理，形成了机器+人工双重反作弊机制，可最大限度保障数据的真实有效性。<br>
                （1）广告投放前：系统会收集合作媒体各项数据，并长期跟踪监测，通过各种算法识别媒体各项数据的真实性；同时，根据媒体的历史数据，评估出媒体每个广告位对应的上限阅读数，当广告阅读数超过上限时，超过部分将不予计费，以此控制作弊带来的风险。<br>
                （2）广告投放中：系统会精准到分钟级监测跟踪媒体数据变化，通过多维度分析比对媒体阅读量的真实性，如发现数据异常或来源异常，我们将及时终止与媒体的合作，最大限度的降低损失，保障广告主的权益。<br>
                （3）广告投放后：针对每个媒体进行质检验收，对于作弊媒体进行查处，有证据证明作弊的，佣金返还给广告主，最大限度的挽回广告主损失。同时，平台通过媒体投放的广告数据和效果反馈，判断媒体的广告效果、流量质量、信誉度等，并对媒体进行评级，对于评级低的媒体，我们将拒绝派单，只有评级高的媒体才能在平台进行接单，避免下次投放带来的风险。<br><br>
                <em>注意：媒体主推送广告文案后被官方删除或处罚，媒体主不承担任何责任，平台将做如下处理：<br>
                  1、广告文案推送100分钟后被官方删除，广告主需按媒体主接单位置预估值的三分之一结算，若删文时文案的实际阅读量大于预估值的三分之一则按实际阅读量结算；<br>
                  2、若广告文案推送后100分钟内被官方删除（秒删），则广告主需按媒体主接单位置预估值全额结算；<br>
                  3、若因为推送广告文案被官方处罚封号的，则广告主需按媒体主接单位置预估值全额结算；<br>
                  4、文案被删除后，媒体主自行取消订单的无法获得补偿。</em><br><br>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title"  @click="showAnswer(1)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>广告推广流程</div>
            <div v-show="answerState[1].isShow" class="Answer">
              <img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">（1）按阅读推广：登录广告主后台，进入<strong>“按阅读推广”</strong>页面，点击<strong>"创建广告"</strong>按钮开始创建推广。根据页面提示，选择阅读广告的<strong>'广告形式'</strong>及其他推广条件设置，然后点击<strong>“下一步”</strong>，进行对应广告类型的广告文案设置。广告文案设置后点击<strong>“下一步”</strong>进入支付页面，点击<strong>“立即支付”</strong>，支付广告费用，完成广告投放设置（注：如果账户内没有足够的余额，可以根据提示进行充值）。广告审核通过后,广告主可进入<strong>“按阅读推广”</strong>页面，点击<strong>“查看”</strong>进入订单详情页面查看对应媒体的推广进程，并可以查看已报名的媒体及广告投放过程中的实时消费金额和广告剩余预估阅读量。<br><br>
                （2）按位置推广：登录广告主后台，点击<strong>“按位置推广”</strong>页面，点击<strong>“选号直投”</strong>按钮，进入媒体列表页面。筛选出要投放的媒体后，选择要投放的广告位置，加入购物车。点开右侧的<strong>“购物车”</strong>，点击<strong>“立即推广”</strong>按钮，进入创建广告页面。根据页面指示填写所需的信息，创建广告并提交。广告提交后，点<strong>“立即支付”</strong>，支付广告费用，完成广告投放设置（注：如果账户内没有足够的余额，可以根据提示进行充值）。<br><br>
              </div>
              <div class="h-label"><strong>按阅读推广广告流程如下图：</strong></div>
              <div class="wrap">
                <div class="wrap-con">
                  <ul class="pro">
                    <li class="pro-list active"><img :src="require('@/assets/images/Ad_read1.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read2.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read3.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read4.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read5.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read6.gif')"></li>
                  </ul>
                  <div class="pro-btn">
                    <a href="javascript:;" class="prev">上一步</a>
                    <a href="javascript:;" class="next">下一步</a>
                  </div>
                </div>
              </div>
              <div class="h-label"><br><br><br><strong>按位置推广广告流程如下图：</strong></div>
              <div class="wrap">
                <div class="wrap-con">
                  <ul class="pro">
                    <li class="pro-list active"><img :src="require('@/assets/images/Media_position1.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position2.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position3.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position4.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position5.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position6.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position7.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position8.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position9.gif')"></li>
                  </ul>
                  <div class="pro-btn">
                    <a href="javascript:;" class="prev">上一步</a>
                    <a href="javascript:;" class="next">下一步</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(2)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>媒体接单流程</div>
            <div v-show="answerState[2].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                （1）阅读广告抢单：登录媒体主后台，进入<strong>“广告中心”</strong>页面，查看可接阅读广告的媒体列表，点击接单媒体后的<strong>“接单”</strong>按钮，查看该媒体可接广告列表（阅读广告有图文和贴片两种广告文案类型）；若媒体预估阅读为0，点击<strong>“数据更新”</strong>获取预估值后查看。进入广告列表页面后，挑选要接单的广告，点击<strong>“立即抢单”</strong>按钮，选择投放该广告的<strong>“位置”</strong>及<strong>“时间”</strong>，点击<strong>“确定”</strong>按钮开始抢单。抢单后，可至<strong>“订单管理”</strong>页面查看广告抢单进程。媒体抢单成功后，至微信公众号官方后台<a
                href="http://mp.weixin.qq.com/" target="_blank">（http://mp.weixin.qq.com/）</a>发布该广告，并在半小时内手动提交链接，如果系统已经获取链接则无需手动添加。链接提交后，媒体主可根据自己的广告阅读情况，在后台点击<strong>“申请结算”</strong>，选择何时结束广告发布，如果媒体24小时内未申请结算，系统会自动申请结算。<br><br>
                （2）位置广告接单：登录媒体主后台，进入<strong>“广告中心”</strong>页面，点击<strong>“位置广告”</strong>按钮，查看可接单的位置广告，可点击<strong>“详情”</strong>查看广告文案，选择是否接单。媒体接单成功后，至微信公众号官方后台<a
                href="http://mp.weixin.qq.com/" target="_blank">（http://mp.weixin.qq.com/）</a>发布该广告，并在半小时内手动提交链接，如果系统已经获取链接则无需手动添加。链接提交后，媒体主可根据自己的广告阅读情况，选择何时结束广告。<br><br>
                <!-- <em>注：阅读广告的实际结束时间会在显示的投放周期之后延长24小时结束。</em><br/><br/> --></div>
              <div class="h-label"><strong>阅读广告抢单流程如下图：</strong></div>
              <div class="wrap">
                <div class="wrap-con">
                  <ul class="pro">
                    <li class="pro-list active"><img :src="require('@/assets/images/Media_read1.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read2.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read3.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read4.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read5.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read6.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read7.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read9.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read9.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read10.gif')"></li>
                  </ul>
                  <div class="pro-btn">
                    <a href="javascript:;" class="prev">上一步</a>
                    <a href="javascript:;" class="next">下一步</a>
                  </div>
                </div>
              </div>
              <div class="h-label"><br><br><br><strong>位置广告接单流程如下图：</strong></div>
              <div class="wrap">
                <div class="wrap-con">
                  <ul class="pro">
                    <li class="pro-list active"><img :src="require('@/assets/images/Media_position1.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position2.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position3.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position4.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position5.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position6.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position7.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position8.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position9.gif')"></li>
                  </ul>
                  <div class="pro-btn">
                    <a href="javascript:;" class="prev">上一步</a>
                    <a href="javascript:;" class="next">下一步</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(3)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>平台要如何充值？</div>
            <div v-show="answerState[3].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">每个广告主注册进来都会有一个属于自己的专属客服，需要充值时请在线咨询专属客服充值。</div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(4)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>订单什么时候结算？怎么结算？</div>
            <div v-show="answerState[4].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                媒体主提交订单申请结算请求后，广告主和神赞平台会在48小时内对订单进行质检和结算。结算完成后，对应的订单金额会自动划到媒体主账号余额中。由于订单量较多，我们将根据申请结算提交的顺序进行操作，请您耐心等待。
              </div>
            </div>
          </div>
        </div>
        <div v-show="listBoxItemState[1]" class="list-box-item">
          <div class="item-list">
            <div class="title" @click="showAnswer(5)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>平台如何保障数据的真实性？</div>
            <div v-show="answerState[5].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                神赞管理团队具有超过十年的丰富互联网广告反作弊经验，建立了独到的返作弊数据模型，采用大数据技术多维度比对分析，结合人工核查处理，形成了机器+人工双重返作弊机制，可最大限度保障数据的真实有效性。<br>
                （1）广告投放前：系统会收集合作媒体各项数据，并长期跟踪监测，通过各种算法识别媒体各项数据的真实性；同时，根据媒体的历史数据，评估出媒体每个广告位对应的上限阅读数，当广告阅读数超过上限时，超过部分将不予计费，以此控制作弊带来的风险。<br>
                （2）广告投放中：系统会精准到分钟级监测跟踪媒体数据变化，通过多维度分析比对媒体阅读量的真实性，如发现数据异常或来源异常，我们将及时终止与媒体的合作，最大限度的降低损失，保障广告主的权益。<br>
                （3）广告投放后：针对每个媒体进行质检验收，对于作弊媒体进行查处，有证据证明作弊的，佣金返还给广告主，最大限度的挽回广告主损失。同时，平台通过媒体投放的广告数据和效果反馈，判断媒体的广告效果、流量质量、信誉度等，并对媒体进行评级，对于评级低的媒体，我们将拒绝派单，只有评级高的媒体才能在平台进行接单，避免下次投放带来的风险。<br><br>
                <em>注意：媒体主推送广告文案后被官方删除或处罚，媒体主不承担任何责任，平台将做如下处理：<br>
                  1、广告文案推送100分钟后被官方删除，广告主需按媒体主接单位置预估值的三分之一结算，若删文时文案的实际阅读量大于预估值的三分之一则按实际阅读量结算；<br>
                  2、若广告文案推送后100分钟内被官方删除（秒删），则广告主需按媒体主接单位置预估值全额结算；<br>
                  3、若因为推送广告文案被官方处罚封号的，则广告主需按媒体主接单位置预估值全额结算；<br>
                  4、文案被删除后，媒体主自行取消订单的无法获得补偿。</em><br><br>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(6)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>广告推广流程</div>
            <div v-show="answerState[6].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">（1）按阅读推广：登录广告主后台，进入<strong>“按阅读推广”</strong>页面，点击<strong>"创建广告"</strong>按钮开始创建推广。根据页面提示，选择阅读广告的<strong>'广告形式'</strong>及其他推广条件设置，然后点击<strong>“下一步”</strong>，进行对应广告类型的广告文案设置。广告文案设置后点击<strong>“下一步”</strong>进入支付页面，点击<strong>“立即支付”</strong>，支付广告费用，完成广告投放设置（注：如果账户内没有足够的余额，可以根据提示进行充值）。广告审核通过后,广告主可进入<strong>“按阅读推广”</strong>页面，点击<strong>“查看”</strong>进入订单详情页面查看对应媒体的推广进程，并可以查看已报名的媒体及广告投放过程中的实时消费金额和广告剩余预估阅读量。<br><br>
                <!-- <em>备注：媒体主推送广告文案提交链接后被官方秒删（100分钟内），媒体主没有任何责任，广告主需按媒体主接单位置预估值的三分之一结算；若广告被删除时，广告实际阅读量大于预估值的三分之一则按实际阅读量结算；文案被删后，媒体主自行取消订单的无法获得补偿。</em><br/><br/> -->
                （2）按位置推广：登录广告主后台，点击<strong>“按位置推广”</strong>页面，点击<strong>“选号直投”</strong>按钮，进入媒体列表页面。筛选出要投放的媒体后，选择要投放的广告位置，加入购物车。点开右侧的<strong>“购物车”</strong>，点击<strong>“立即推广”</strong>按钮，进入创建广告页面。根据页面指示填写所需的信息，创建广告并提交。广告提交后，点<strong>“立即支付”</strong>，支付广告费用，完成广告投放设置（注：如果账户内没有足够的余额，可以根据提示进行充值）。<br><br>
              </div>
              <div class="h-label"><strong>按阅读推广广告流程如下图：</strong></div>
              <div class="wrap">
                <div class="wrap-con">
                  <ul class="pro">
                    <li class="pro-list active"><img :src="require('@/assets/images/Ad_read1.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read2.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read4.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read4.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read5.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Ad_read6.gif')"></li>
                  </ul>
                  <div class="pro-btn">
                    <a href="javascript:;" class="prev">上一步</a>
                    <a href="javascript:;" class="next">下一步</a>
                  </div>
                </div>
              </div>
              <div class="h-label"><br><br><br><strong>按位置推广广告流程如下图：</strong></div>
              <div class="wrap">
                <div class="wrap-con">
                  <ul class="pro">
                    <li class="pro-list active"><img :src="require('@/assets/images/Media_position1.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position2.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position3.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position4.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position5.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position6.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position7.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position8.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position9.gif')"></li>
                  </ul>
                  <div class="pro-btn">
                    <a href="javascript:;" class="prev">上一步</a>
                    <a href="javascript:;" class="next">下一步</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(7)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>广告主如何投放广告？</div>
            <div v-show="answerState[7].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                广告主可免费注册广告主会员，进入广告主后台自主创建广告项目，然后根据项目预算进行充值，待项目审核通过后，广告会自动上线，媒体主动接单；也可以在线咨询专属客服，协助创建广告项目，然后充值，广告审核通过后自动上线，媒体主动接单。
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(8)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>平台有哪些广告投放模式？如何计费？</div>
            <div v-show="answerState[8].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">广告主有两种广告投放模式：按阅读投放广告和按位置投放广告。<br>
                （1）按阅读投放广告：即按投放广告时产生的阅读数来进行计费，广告实际消费=广告阅读数*广告单价。广告主投放广告时可以自主设置广告单价(每阅读单价)和广告预算，系统会自动计算出投放此广告可以获得的阅读量（广告预算/广告单价），广告审核上线后，冻结对应的广告预算，待媒体投放完成后，自动扣减相应金额，直至预算扣除完毕广告自动停止投放。若投放广告有剩余，平台将返还给广告主。<br>
                （2）按位置投放广告：即按媒体的粉丝数及对应的广告位置进行计费，每个媒体对应的广告位置在平台都有标价，广告主可根据需求挑选合适的媒体，然后根据媒体标价向平台支付对应的金额，平台审核通过后立即向媒体派单投放。
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(9)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>阅读广告投放时有哪些需要注意?</div>
            <div v-show="answerState[9].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">（1）为了保障广告投放效率和质量，广告主可根据广告的性质及受众人群，适当设置一些接单媒体的筛选条件，但条件设置过高，匹配到的媒体会相应较少，广告消耗较慢。<br>
                （2）创建广告时的广告单价不宜过低，在同类文案中媒体主会优先选择广告单价较高的广告投放。
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(10)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>媒体的预估阅读量是怎么得来的？</div>
            <div v-show="answerState[10].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">媒体的预估阅读量是根据该媒体位置上近期的发文状况预估得来的。</div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(11)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>广告审核是什么？审核多久有结果？</div>
            <div v-show="answerState[11].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                广告主创建新的广告项目，在发布前需要通过平台的审核，审核内容包括不限于：广告单价文章标题，图片，正文内容，原文链接等内容的审核，若广告内容有违法违规嫌疑，平台有权拒绝通过审核。审核不通过的广告，将无法正常发布，平台将退还广告主余额。<br>
                广告提交审核后，平台一般会在一个工作日内完成审核，若遇到双休或者节假日则顺延到下一个工作日审核，紧急需求可以在线咨询专属客服。<br><br>
                <em>注意：审核通过后投放中的广告不能更改文案内容。</em>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(12)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>广告投放效果好，我想增加预算怎么操作？
            </div>
            <div v-show="answerState[12].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                投放中的阅读广告若想增加预算，可在广告主后台找到对应的广告项目，点击设置按钮进入设置页面增加预算，增加的预算会重新计入广告预估阅读量，增加预算后广告无须再审核。若想延长广告投放时间请在线咨询专属客服。
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(13)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>为什么我的广告一直匹配不到大号，没有大号接单？
            </div>
            <div v-show="answerState[13].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                平台是根据广告主的需求、投放条件、预算（预估阅读量）、文案内容等信息，通过大数据分析智能匹配媒体，投放条件设置越宽，匹配的媒体越多，反之则少。投放预估阅读量越多，单价越高，匹配到大号的几率越大，接单的媒体越多。
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(14)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>广告消耗慢？</div>
            <div v-show="answerState[14].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                广告消耗慢主要有这几个原因，首先，广告单价设置一定要合理，甚至要有竞争优势，若同类型的广告单价比较高，媒体会优先接广告单价高的广告。其次，充值的金额太低，总体的预估量太少，会导致匹配的媒体少，从而接单的媒体也少。若广告消耗慢，广告主可以联系专属客服咨询。
              </div>
            </div>
          </div>
        </div>
        <div v-show="listBoxItemState[2]" class="list-box-item">
          <div class="item-list">
            <div class="title" @click="showAnswer(15)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>媒体接单流程</div>
            <div v-show="answerState[15].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                （1）阅读广告抢单：登录媒体主后台，进入<strong>“广告中心”</strong>页面，查看可接阅读广告的媒体列表，点击接单媒体后的<strong>“接单”</strong>按钮，查看该媒体可接广告列表（阅读广告有图文和贴片两种广告文案类型）；若媒体预估阅读为0，点击<strong>“数据更新”</strong>获取预估值后查看。进入广告列表页面后，挑选要接单的广告，点击<strong>“立即抢单”</strong>按钮，选择投放该广告的<strong>“位置”</strong>及<strong>“时间”</strong>，点击<strong>“确定”</strong>按钮开始抢单。抢单后，可至<strong>“订单管理”</strong>页面查看广告抢单进程。媒体抢单成功后，至微信公众号官方后台<a
                href="http://mp.weixin.qq.com/" target="_blank">（http://mp.weixin.qq.com/）</a>发布该广告，并在半小时内手动提交链接，如果系统已经获取链接则无需手动添加。链接提交后，媒体主可根据自己的广告阅读情况，在后台点击<strong>“申请结算”</strong>，选择何时结束广告发布，如果媒体24小时内未申请结算，系统会自动申请结算。<br><br>
                （2）位置广告接单：登录媒体主后台，进入<strong>“广告中心”</strong>页面，点击<strong>“位置广告”</strong>按钮，查看可接单的位置广告，可点击<strong>“详情”</strong>查看广告文案，选择是否接单。媒体接单成功后，至微信公众号官方后台<a
                href="http://mp.weixin.qq.com/" target="_blank">（http://mp.weixin.qq.com/）</a>发布该广告，并在半小时内手动提交链接，如果系统已经获取链接则无需手动添加。链接提交后，媒体主可根据自己的广告阅读情况，选择何时结束广告。<br><br>
              </div>
              <div class="h-label"><strong>阅读广告抢单流程如下图：</strong></div>
              <div class="wrap">
                <div class="wrap-con">
                  <ul class="pro">
                    <li class="pro-list active"><img :src="require('@/assets/images/Media_read1.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read2.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read3.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read4.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read5.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read6.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read7.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read8.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read9.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_read10.gif')"></li>
                  </ul>
                  <div class="pro-btn">
                    <a href="javascript:;" class="prev">上一步</a>
                    <a href="javascript:;" class="next">下一步</a>
                  </div>
                </div>
              </div>
              <div class="h-label"><br><br><br><strong>位置广告接单流程如下图：</strong></div>
              <div class="wrap">
                <div class="wrap-con">
                  <ul class="pro">
                    <li class="pro-list active"><img :src="require('@/assets/images/Media_position1.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position2.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position3.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position4.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position5.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position6.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position7.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position8.gif')"></li>
                    <li class="pro-list"><img :src="require('@/assets/images/Media_position9.gif')"></li>
                  </ul>
                  <div class="pro-btn">
                    <a href="javascript:;" class="prev">上一步</a>
                    <a href="javascript:;" class="next">下一步</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(16)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>媒体有哪些接单计费方式？如何计费？</div>
            <div v-show="answerState[16].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">神赞平台有两种计费模式：按真实阅读量计费和按位置计费。<br>
                （1）按真实阅读量计费：即按媒体发布广告的真实阅读量来计费。
                媒体主的广告收入=广告单价*结束订单时推送广告文案的真实阅读量（若真实阅读量大于预估阅读量，则按预估阅读量来计算）。每个订单完成后，平台会人工进行质检，若发现投放广告过程中有任何作弊行为或者没有按要求投放广告，将依情况扣除广告金额，情节严重将封号处理。<br>
                （2）按位置计费：媒体入住平台时可根据自身媒体的粉丝数，粉丝活跃度等为每个广告位置填写合理报价，广告主派单时将按报价向媒体主支付广告金额。
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(17)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>接单的时候有哪些地方需要注意？</div>
            <div v-show="answerState[17].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">（1）接单后，媒体主须在广告状态为“待发布”状态下，按时推送该文案，否则不予计费。<br>
                （2）媒体主在微信公众号官方后台发布广告后，须在半小时内提交发文链接（如系统已经获取链接则无需添加）。若文章推送后一小时内未获取到群发的文章链接，订单将被自动取消。<br>
                （3）媒体主发布广告文案后，不可人工干预文章阅读量或进行其他任何影响文章真实阅读量的行为，否则将直接扣除广告金额直至封号处理。
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(18)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>为什么每个媒体可接广告个数和可接广告的文案不一样？
            </div>
            <div v-show="answerState[18].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">系统根据广告的受众范围，投放条件，媒体的质量，媒体诚信度等智能匹配可接单媒体，优质诚信的媒体主将获得更多订单。</div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(19)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>一个公众号一天可以接几个广告？可以连续接同一广告吗？如果不能，接过该广告后几天能再接？
            </div>
            <div v-show="answerState[19].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">为了维护媒体账号的质量和广告的投放效果，一个公众号一天最多可接两条不同类型的图文广告或者贴片广告，而且贴片广告不能与其他接单文案同时出现在同篇文章里。<br>
                一个公众号不能连续接同一广告，不同的广告相隔时间不同，具体的广告间隔时间可在线咨询专属客服。
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(20)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>推送广告文案的时候有哪些地方需要注意？
            </div>
            <div v-show="answerState[20].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">（1）推送图文广告时，广告文案的排版、标题、封面、正文、原文链接都不允许修改，需要和平台提供的文案保持一致，请在推文前预览是否与原文案一致。<br>
                （2）推送贴片广告时，贴片广告的引导文案和图片不能做任何修改；贴片广告与文章正文之间不能有大量空白；同一文案内不能投放多个贴片广告。<br>
                为了保证公平公正的交易，平台将对每一条广告进行人工质检，如发现订单文案有修改，该订单将视为无效订单不予结算。<br><br><em>注意：一键复制文案时，若使用的浏览器flash版本过低，会导致视频、flash文件等复制失败，请升级您的Adobe
                  flash插件后再复制，确保复制的广告文案完整。</em></div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(21)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>推送的广告文案什么时候可以删除？</div>
            <div v-show="answerState[21].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">媒体主在后台对某个广告订单申请结算后（超过24小时系统自动申请结算），订单状态变为“待结算”时，方可删除文案。</div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(22)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>平台要如何提现？提交提现申请后多久能到账？为什么提交提现申请后提现金额会显示在冻结金额中？
            </div>
            <div v-show="answerState[22].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">媒体主可在<strong>“财务管理”</strong>页面进行提现，提交提现申请且核实信息无误后，平台会针对提现申请进行支付打款，周三18:00之前提交提现申请的，当周到账；周三之后提交申请的，下周到账（节假日顺延）。<br>
                提交提现申请后，提现金额会暂时冻结，待工作人员确认打款后，提现金额将从冻结金额中扣减。
              </div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(23)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>广告质检不合格的原因？</div>
            <div v-show="answerState[23].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">（1）推送文案和平台提供的文案不一致，推送文案中排版，标题，封面，正文中的图片、文案和视频，原文链接等有修改或者有缺失；<br>（2）贴片广告的引导语和图片与平台提供的不一致；<br>（3）向平台提交的链接地址不是媒体申请广告时选择的投放位置地址或不是用申请广告的媒体账号推送的文案地址；<br>（4）推送时间不符合广告要求的时间；<br>
                （5）推送文案后，有人工干预数据，如刷量、微信群推、朋友圈转发和好友转发等作弊行为。<br><br>
                <em>注意:若推送文案有原文链接，媒体主应严格按照平台提供的原文链接添加到推送文案，不得修改或缺失；若推送文案没有原文链接，媒体主不得私自添加其他链接。</em></div>
            </div>
          </div>
          <div class="item-list">
            <div class="title" @click="showAnswer(24)"><img class="Q_Icon" :src="require('@/assets/images/Q-icon.png')"/>什么是媒体封禁和封号？</div>
            <div v-show="answerState[24].isShow" class="Answer"><img class="A_Icon" :src="require('@/assets/images/A-icon.png')" alt="">
              <div class="h-text">
                媒体在投放过程中人工干预数据，如刷量、微信群推、朋友圈转发和好友转发等任何作弊违规行为，平台会对媒体进行封禁处理，封禁处理是针对媒体主下面的接单媒体，被封禁的媒体将无法正常接单。出现两次违规或作弊行为，媒体主账号将被封号处理，平台永久终止与其合作。
              </div>
            </div>
          </div>
        </div>
        <div v-show="listBoxItemState[3]" class="list-box-item helpText">
          <div class="BoxText">
            神赞依据本协议的规定提供服务，本协议具有合同效力。您必须完全同意本协议，才能够享受本网站提供的服务。您在神赞注册成功即表示您完全接受本协议的全部条款。注册用户时请您认真阅读本《神赞用户服务协议》，请您审阅并接受或不接受本《协议》（未成年人应在法定监护人陪同下审阅）。除非您接受本《协议》条款，否则您无权使用本网站提供的相关服务。您的使用行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。<br>
            <span>一、定义</span><br>
            在本协议中所使用的下列词语，除非另有定义，应具有以下含义：<br>
            1、 "本网站"在无特别说明的情况下，均指"神赞"（www.shenzan.com）。<br>
            2、 "用户"指符合本协议所规定的条件，同意遵守本网站各种规则、条款（包括但不限于本协议），并使用本网站的个人或机构。 <br>
            <span>二、用户资格</span><br>
            1、只有符合下列条件之一的人员或实体才能申请成为本网站用户，可以使用本网站的服务。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(1) 年满十八岁，并具有民事权利能力和民事行为能力的自然人；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(2) 未满十八岁，但监护人（包括但不仅限于父母）予以书面同意的自然人；<br>
            2、根据中国法律或设立地法律、法规和/或规章成立并合法存在的公司、企事业单位、社团组织和其他组织。无民事行为能力人、限制民事行为能力人以及无经营或特定经营资格的组织不当注册为本网站用户或超过其民事权利或行为能力范围从事交易的，其与本网站之间的协议自始无效，本网站一经发现，有权立即注销该用户，并追究其使用本网站"服务"的一切法律责任。<br>
            3、 用户必须有明确的联系地址和联系电话，并提供真实姓名或公司名称。<br>

            <span>三、用户的权利和义务</span> <br>
            1、用户有权根据本协议的规定及本网站发布的相关规则，利用本网站网上交易平台发布任务信息、查询用户信息、参加任务、在本网站社区发帖、参加本网站的有关活动及有权享受本网站提供的其他的有关资讯及信息服务。<br>
            2、用户有权根据需要更改登录和账户提现密码。用户应对以该用户名进行的所有活动和事件负全部责任。<br>
            3、用户有义务确保向本网站提供的任何资料、注册信息真实准确，包括但不限于真实姓名、身份证号、联系电话、地址、邮政编码等。保证本网站可以通过上述联系方式与自己进行联系。同时，用户也有义务在相关资料实际变更时及时更新有关注册资料。
            <br>
            4、用户不得以任何形式擅自转让或授权他人使用自己在本网站的用户帐号。<br>
            5、用户有义务确保在本网站网上交易平台上发布的任务信息真实、准确，无误导性。<br>
            6、用户不得在本网站网上发布平台发布国家禁止信息、不得发布侵犯他人知识产权或其他合法权益的信息，也不得发布违背社会公共利益或公共道德的信息。<br>
            7、用户在本网站交易中应当遵守诚实信用原则，不得以干预或操纵发布任务等不正当竞争方式扰乱网上交易秩序，不得从事与网上交易无关的不当行为，不得在交易平台上发布任何违法信息。<br>
            8、用户不应采取不正当手段（包括但不限于虚假信息、互换好评等方式）提高自身或他人信用度，或采用不正当手段恶意评价其他用户，降低其他用户信用度。<br>
            9、用户承诺自己在使用本网站网上交易平台实施的所有行为遵守国家法律、法规和本网站的相关规定以及各种社会公共利益或公共道德。对于任何法律后果的发生，用户将以自己的名义独立承担所有相应的法律责任。<br>
            10、用户在本网站网上交易过程中如与其他用户因交易产生纠纷，可以请求本网站从中予以协调。用户如发现其他用户有违法或违反本协议的行为，可以向本网站举报。如用户因网上交易与其他用户产生诉讼的，用户有权通过司法部门要求本网站提供相关资料。<br>
            11、用户应自行承担因交易产生的相关费用，并依法纳税。<br>
            12、未经本网站书面允许，用户不得将本网站资料以及在交易平台上所展示的任何信息以复制、修改、翻译等形式制作衍生作品、分发或公开展示。<br>
            13、用户不得使用以下方式登录网站或破坏网站所提供的服务：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(1) 以任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件或其它自动方式访问或登录本网站；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(2) 通过任何方式对本公司内部结构造成或可能造成不合理或不合比例的重大负荷的行为；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(3) 通过任何方式干扰或试图干扰网站的正常工作或网站上进行的任何活动； <br>
            14、用户同意接收来自本网站的信息，包括但不限于活动信息、交易信息、促销信息等。<br>
            15、用户使用规范<br>
            a、用户应保证自己的微博账号只发布合法、合规、合情的内容，不涉及以下内容：<br>
            1）违反国家宪法所确定的基本原则的内容；<br>
            2）出现危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的内容；<br>
            3）涉黄、涉政、含有个人极端言论的内容；<br>
            4）使用损害国家荣誉和利益的内容；<br>
            5）使用煽动民族仇恨、民族歧视，破坏民族团结的内容；<br>
            6）使用破坏国家宗教政策，宣扬邪教和封建迷信的内容；<br>
            7）散布谣言，扰乱社会秩序，破坏社会稳定的内容；<br>
            8）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的内容；<br>
            9）使用中华人民共和国国旗、国徽、国歌；<br>
            10）使用国家机关和国家机关工作人员的名义；<br>
            11）使用国家级、最高级、最佳等用语；<br>
            12）出现妨碍社会安定和危害人身、财产安全，损害社会公共利益的言论；<br>
            13）使用妨碍社会公共秩序和违背社会良好风尚的内容；<br>
            14）涉及近期敏感言论和敏感活动，抨击他人的产品或广告，进行负面推广；<br>
            15）使用、发布涉及法律、行政法规规定禁止的其他内容；<br>
            一旦神赞发现用户发布以上违法内容，神赞平台有权利向公安、工商等相关政府机关举报，其后果由用户自行承担。自用户发布违法内容起，视为用户违约，神赞相应的不再承担本服务条款下的义务。<br>
            特别提醒：对于涉及知名品牌的商品，请用户仔细查阅商家提供的相关正品证明，并自行判断是否发送；若用户未能仔细审查而发布了不实信息，由此带来不良后果，用户应承担相应责任，与神赞平台无关。<br>
            1、如用户违反国家法律法规、本服务条款或对本网站进行恶意攻击时，本网站将有权停止向用户提供服务而不需承担任何责任，如导致本网站遭受任何损害或遭受任何来自第三方的纠纷、诉讼、索赔要求,用户须向本公司赔偿相应的损失，如诉讼费、律师费、其他第三方费用、业务影响损失等费用，并且用户需对其违反服务条款所产生的一切后果负全部法律责任。<br>
            <span>四、神赞的权利和义务</span> <br>
            1、本网站仅为用户提供一个交易平台，用户必须保证所有信息真实有效合法；<br>
            2、本网站有义务在现有技术水平的基础上努力确保整个网上交易交流平台的正常运行，尽力避免服务中断或将中断时间限制在最短时间内，保证用户网上交易交流活动的顺利进行。<br>
            3、本网站有义务对用户在注册使用本网站网上信息平台中所遇到的问题及反映的情况及时作出回复。<br>
            4、本网站有权对用户的注册资料进行查阅，对存在任何问题或怀疑的注册资料，本网站有权发出通知询问用户并要求用户做出解释、改正，或不通知用户直接做出处罚、删除信息、删除账号等处理。<br>
            5、用户因在本网站网上交易与其他用户产生纠纷的，用户通过司法部门或行政部门依照法定程序要求本网站提供相关资料，本网站将积极配合并提供有关资料；用户将纠纷告知本网站，或本网站知悉纠纷情况的，经审核后，本网站有权通过电子邮件及电话联系向纠纷双方了解纠纷情况，并将所了解的情况通过电子邮件互相通知对方。<br>
            6、因网上信息平台的特殊性，本网站没有义务对所有用户的注册资料、所有的交易行为以及与交易有关的其他事项进行事先审查，但如发生以下情形，本网站有权限制用户的活动、向用户核实有关资料、发出警告通知、暂时中止、无限期地中止及拒绝向该用户提供服务：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(1) 用户违反本协议或因被提及而纳入本协议的文件；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(2)
            存在用户或其他第三方通知本网站，认为某个用户或具体交易事项存在违法或不当行为，并提供相关证据，而本网站无法联系到该用户核证或验证该用户向本网站提供的任何资料；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(3)
            存在用户或其他第三方通知本网站，认为某个用户或具体交易事项存在违法或不当行为，并提供相关证据。本网站以普通非专业交易者的知识水平标准对相关内容进行判别，可以明显认为这些内容或行为可能对本网站用户或本网站造成财务损失或法律责任。<br>
            7、根据国家法律法规、本协议的内容和本网站所掌握的事实依据，可以认定用户存在违法或违反本协议行为以及在本网站交易平台上的其他不当行为，本网站有权在本网站交易平台及所在网站上以网络发布形式公布用户的违法行为，并有权随时作出删除相关信息、终止服务提供等处理，而无须征得用户的同意。
            <br>
            8、本网站有权在不通知用户的前提下删除或采取其他限制性措施处理下列信息：包括但不限于以规避费用为目的；以炒作信用为目的；存在欺诈等恶意或虚假内容；与网上交易无关或不是以交易为目的；存在恶意竞价或其他试图扰乱正常交易秩序因素；该信息违反公共利益或可能严重损害本网站和其他用户合法利益的。<br>
            <span>五、费用及支付方式</span><br>
            1.
            客户将需支付给本网站的推广费用预先充值到客户在本网站的账户中，该费用将用于向本网站支付服务费用；本网站有权从客户账户扣除客户产生的服务费用，客户需在本网站执行推广服务前向其支付每笔订单推广金额的100%。<br>
            2. 如客户预付费用余额不足，本网站系统将自动暂停推广服务；客户续费之后再启动服务。<br>
            3. 符合开票资格的，本网站可在客户付款后为客户开具相应金额的合法有效的增值税发票。<br>
            4. 如客户未按照规定按时付款，或违反其在本协议项下的任何义务，本网站有权立即停止向客户提供本协议项下全部服务并解除本合同，同时本网站无需承担任何法律责任。<br>
            5. 本网站不退还信息费，客户有权继续使用已充值但未使用完的账户余额。 <br>
            <span>六、服务的中断和终止</span> <br>
            1、在本网站未向用户收取相关服务费用的情况下，本网站可自行全权决定以任何理由 (包括但不限于本网站认为用户已违反本协议的字面意义和精神，或用户在超过180天内未登录本网站等)
            终止对用户的服务，并不再保存用户在本网站的全部资料（包括但不限于用户信息、商品信息、交易信息等）。同时本网站可自行全权决定，在发出通知或不发出通知的情况下，随时停止提供全部或部分服务。服务终止后，本网站没有义务为用户保留原用户资料或与之相关的任何信息，或转发任何未曾阅读或发送的信息给用户或第三方。<br>
            2、如用户向本网站提出注销本网站注册用户身份，需经本网站审核同意，由本网站注销该注册用户，用户即解除与本网站的协议关系，但本网站仍保留下列权利：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(1) 用户注销后，本网站有权保留该用户的资料,包括但不限于以前的用户资料、交易记录等。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(2) 用户注销后，如用户在注销前在本网站交易平台上存在违法行为或违反本协议的行为，本网站仍可行使本协议所规定的权利。 <br>
            3、如存在下列情况，本网站可以通过注销用户的方式终止服务： <br>
            &nbsp;&nbsp;&nbsp;&nbsp;(1)
            在用户违反本协议相关规定时，本网站有权终止向该用户提供服务。本网站将在中断服务时通知用户。但如该用户在被本网站终止提供服务后，再一次直接或间接或以他人名义注册为本网站用户的，本网站有权再次单方面终止为该用户提供服务；<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(2) 一旦本网站发现用户注册资料中主要内容是虚假的，本网站有权随时终止为该用户提供服务； <br>
            &nbsp;&nbsp;&nbsp;&nbsp;(3) 用户出现作弊行为，网站可根据情况作出处理，甚至注销用户。<br>
            4、其它本网站认为需终止服务的情况。<br>
            <span>七、本网站的责任范围</span><br>
            当用户接受该协议时，用户应明确了解并同意∶<br>
            1、用户使用本网站之风险由用户个人负担。本网站是在现有技术基础上提供的。本网站不保证以下事项∶<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(1) 本网站将符合用户的要求。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(2) 本网站不受干扰、能够及时提供、安全可靠或免于出错。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(3) 本服务使用权的取得结果是正确或可靠的。<br>
            2、是否经由本网站下载或取得任何资料，由用户自行考虑、衡量并且自负风险，因下载任何资料而导致用户电脑系统的任何损坏或资料流失，用户应负完全责任。<br>
            3、用户经由本网站取得的建议和资讯，无论其形式或表现，绝不构成本协议未明示规定的任何保证。<br>
            4、基于以下原因而造成的利润、商誉、使用、资料损失或其它无形损失，本网站不承担任何直接、间接、附带、特别、衍生性或惩罚性赔偿（即使本网站已被告知前款赔偿的可能性）：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(1) 本网站的使用或无法使用。 <br>
            &nbsp;&nbsp;&nbsp;&nbsp;(2) 用户的传输或资料遭到未获授权的存取或变更。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(3) 本网站中任何第三方之声明或行为。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;(4) 本网站其它相关事宜。<br>
            5、本网站只是为用户提供一个服务交易的平台，对于用户所发布的任务和合法性、真实性及其品质，以及用户履行交易的能力等，本网站一律不负任何担保责任。用户如果因使用本网站，或因购买刊登于本网站的任何物品，而受有损害时，本网站不负任何补偿或赔偿责任。<br>
            6、本网站提供与其它互联网上的网站或资源的链接，用户可能会因此连结至其它运营商经营的网站，但不表示本网站与这些运营商有任何关系。其它运营商经营的网站均由各经营者自行负责，不属于本网站控制及负责范围之内。对于存在或来源于此类网站或资源的任何内容、广告、产品或其它资料，本网站亦不予保证或负责。因使用或依赖任何此类网站或资源发布的或经由此类网站或资源获得的任何内容、物品或服务所产生的任何损害或损失，本网站不负任何直接或间接的责任。<br>
            <span>八、知识产权</span><br>
            1、本网站及本网站所使用的任何相关软件、程序、内容，包括但不限于作品、图片、档案、资料、网站构架、网站版面的安排、网页设计、经由本网站或广告商向用户呈现的广告或资讯，均由本网站或其它权利人依法享有相应的知识产权，包括但不限于著作权、商标权、专利权或其它专属权利等，受到相关法律的保护。未经本网站或权利人明示授权，用户保证不修改、出租、出借、出售、散布本网站及本网站所使用的上述任何资料和资源，或根据上述资料和资源制作成任何种类物品。<br>
            2、本网站授予用户不可转移及非专属的使用权，使用户可以通过单机计算机使用本网站的目标代码（以下简称"软件"），但用户不得且不得允许任何第三方，复制、修改、创作衍生作品、进行还原工程、反向组译，或以其它方式破译或试图破译源代码，或出售、转让"软件"或对"软件
            <br>"进行再授权，或以其它方式移转"软件"之任何权利。用户同意不以任何方式修改"软件"，或使用修改后的"软件"。<br>
            3、用户不得经由非本网站所提供的界面使用本网站。<br>
            <span>九、不可抗力</span><br>
            因不可抗力或者其他意外事件，使得本协议的履行不可能、不必要或者无意义的，双方均不承担责任。本合同所称之不可抗力意指不能预见、不能避免并不能克服的客观情况，包括但不限于战争、台风、水灾、火灾、雷击或地震、罢工、暴动、法定疾病、黑客攻击、网络病毒、电信部门技术管制、政府行为或任何其它自然或人为造成的灾难等客观情况。<br>
            <span>十、争议解决方式</span><br>
            1、本协议及其修订本的有效性、履行和与本协议及其修订本效力有关的所有事宜，将受中华人民共和国法律管辖，任何争议仅适用中华人民共和国法律。<br>
            2、因使用本网站服务所引起与本网站的任何争议，均应提交相应官方仲裁机关进行仲裁。相关争议应单独仲裁，不得与任何其它方的争议在任何仲裁中合并处理，该仲裁裁决是终局，对各方均有约束力。如果所涉及的争议不适于仲裁解决，用户同意一切争议由北京市法院管辖。<br>
            本协议可由本网站随时修订，并将修订后的协议公告于本网站之上，修订后的条款内容自公告时起生效，并成为本协议的一部分。<br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelpContent",
    data(){
      return {
        tabList:[
          {id:1,text:"常见问题",isActive:true},
          {id:2,text:"广告主",isActive:false},
          {id:3,text:"媒体主",isActive:false},
          {id:4,text:"用户协议",isActive:false}
          ],
        listBoxItemState:[true,false,false,false],
        answerState:[]
      }
    },
    methods:{
      changeTab(indexValue){
        this.tabList.forEach((item,index)=>{
          item.isActive = false;
          this.listBoxItemState[index] = false;
        });
        this.tabList[indexValue].isActive = true;
        this.listBoxItemState[indexValue] = true;
      },
      //设置回复数组
      setAnswerState(){
        for(let i=0;i<25;i++){
          let obj = {isShow:false};
          this.answerState.push(obj);
        }
      },
      //改变回复显隐状态
      showAnswer(index){
        this.answerState[index].isShow =!this.answerState[index].isShow;
      }
    },
    created(){
      this.setAnswerState();
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    background #fafafa
    padding-top 82px
    font-size 14px
    .content
      width 1200px
      margin 0 auto
      padding 55px 0
      overflow hidden
      .tab-box
        background #fff
        padding-bottom 20px
        float left

        h1
          font-size 26px
          color #333
          padding 10px
          text-align center
          padding-top 20px

        .item-box
          width 200px
          color #333

          .item
            margin 10px 0
            cursor pointer
            width 100%
            height 42px
            line-height 42px
            text-align center

            &.active
              background #4cb5ff
              color #fff

      .list-box
        margin-left 50px
        background #fff
        width 948px
        height 100%
        float left
        .list-box-item
          padding 56px 40px
          min-height 570px
          overflow auto
          .item-list
            padding 20px 0
            border-bottom 1px solid #eef1f5
            .title
              line-height 18px
              cursor pointer
              font-size 18px
              color #111
              .Q_Icon
                width: 20px;
                height: 21px;
                display: inline-block;
                background-size: 20px 21px;
                background-repeat: no-repeat;
                margin-right: 20px;
                margin-bottom -5px
            .Answer
              padding-top 15px
              overflow hidden
              .A_Icon
                width: 20px;
                height: 21px;
                display: inline-block;
                background-size: 20px 21px;
                background-repeat: no-repeat;
                margin-right: 20px;
                margin-bottom -5px
                float left
              .h-text
                float left
                width 816px
                color #333
                line-height 28px
                em
                  color #cc2929
                  font-weight bold
              .h-label
                padding-left 40px
                color #111
                padding-bottom 15px
              .wrap
                border 1px solid #eef1f5
                .wrap-con
                  padding 20px
                  position relative
                  .pro
                    overflow hidden
                    .pro-list
                      display none
                      &.active
                        display block
                  .pro-btn
                    overflow hidden
                    margin-top 25px
                    text-align center
                    img
                      max-width 868px
                      width 100%
                      padding-top 20px
                    a
                      width 102px
                      height 36px
                      text-align center
                      display inline-block
                      line-height 36px
                      margin-left 8px
                      background-color #32c5d2
                      color #fff
                      border-radius 2px
                      -webkit-border-radius 2px
          .BoxText
            line-height 26px
            height 570px
            span
              line-height 30px
              color #333
              font-size 16px
</style>
