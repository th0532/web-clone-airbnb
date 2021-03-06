import React, {useState} from "react";
import "./componentCSS/contentContainer.css";

// MainList data

const ContentContainer = () =>{
    return(
        <div>
            <div className={"main_container"}>
                <Explan></Explan>
                <MainList></MainList>
            </div>
            <Online></Online>
        </div>
    )
}

const Explan = () =>{
    return (
        <div className={"explan"}>
            <h1>가까운 여행지, 에어비앤비와</h1>
            <h1>탐험해보세요.</h1>
        </div>
    )
}

const MainList = () =>{
    const MainList = [
        {
            imgLink:"https://a0.muscache.com/im/pictures/5924e9ef-fc40-439e-966a-1c76a634152a.jpg?im_w=480",
            title:"가까운 여행지",
            desc:"자동차로 금방 다녀올 수 있는 근교 여행지에서 휴식을 즐기세요."
        },
        {
            imgLink:"https://a0.muscache.com/im/pictures/7ee8ad00-0480-4b75-843f-1d2e4c01dde6.jpg?im_w=480",
            title:"온라인 체험",
            desc:"세계 각지의 호스트가 보여주는 특별한 세상"
        },
        {
            imgLink:"https://a0.muscache.com/im/pictures/f8ec8dab-f5a4-423b-a81c-201f450d329d.jpg?im_w=480",
            title:"나만의 공간",
            desc:"일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요."
        },
        {
            imgLink:"https://a0.muscache.com/im/pictures/99ff3081-68b9-4e2b-801f-0ab9767eaa81.jpg?im_w=480",
            title:"장기숙박",
            desc:"한 달 이상 장기 숙박할 숙소를 에어비앤비에서 찾아보세요."
        },
    ]
    console.log(MainList);

    return(
        <div className={"mainList"}>
            <ul>
                {MainList.map((data, index) =>(
                    <li>
                    <div className="mainList_Img">
                        <img src = {data.imgLink} alt="list-item" height="210px"></img>
                    </div>
                    <div className="mainList_desc">
                        <dl>
                            <dt>{data.title}</dt>
                            <dd>{data.desc}</dd>
                        </dl>
                    </div>
                </li>
                ))}
            </ul>

        </div>
    )
}

const Online = () => {
    const online_grid_item = [
        {
            itemClassId:"item_img1",
            itemDescText1:"볼티모어의 '식물 닥터'에게서 식물",
            itemDescText2:"번식법을 배워보세요."
        },
        {
            itemClassId:"item_img2",
            itemDescText1:"스트레칭을 하고, 호흡을 가다듬고, 긴장을 풀어보세요. 친구와 함께하는 요가 클래스."
        },
        {
            itemClassId:"item_img3",
            itemDescText1:"암스테르담에 사는 제니스와 함께 음악을 들으며 명상하기"
        },
        {
            itemClassId:"item_img4",
            itemDescText1:"존과 함께 그림 그리며 아프리카 펭귄에게",
            itemDescText2:"도움의 손길보내기"

        },
    ]
    return(
        <div className={"online_container"}>
            <div className={"online_desc"}>
                <div className={"online_text"}>
                    <dl>
                        <dt>온라인 체험</dt>
                        <dd>세계 각지의 사람들을 만나 새로운 경험을 해보세요.개성 있는 호스트가 진행하는 실시간 영상 세션을 통해 이제 집에서도 안전하게 체험을 즐기실 수 있습니다.</dd>
                    </dl>
                </div>
                <div className={"online_tour_link"}>
                    <a>모두 둘러보기</a>
                </div>
            </div>
            <div className={"online_grid"}>
                {online_grid_item.map((data, index)=>(
                    <div className={"item " + data.itemClassId}>
                        <div className={"item_desc"}>
                            <p>{data.itemDescText1}</p>
                            <p>{data.itemDescText2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContentContainer;