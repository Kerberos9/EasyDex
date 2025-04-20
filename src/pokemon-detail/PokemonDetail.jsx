import React, {Component} from 'react';
import styles from './PokemonDetail.css'
import {Types} from "@/types/Types";

export const PokemonDetail = ({id, name, stats, types, sprite, weight}) => {
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    let roundedWeight = weight / 10;
    let maxStat = Math.max(stats.hp, stats.attack, stats.defense, stats.spattack, stats.spdefense, stats.speed);
    let weightClass = getClassByWeight(roundedWeight);
    let totalStats = stats.hp + stats.attack + stats.defense + stats.spattack + stats.spdefense + stats.speed;
    maxStat += 20;
    return (
        <div className={"pokemon-detail"}>
            <div className={"pokemon-detail-title"}>
                <span className={"pokemon-detail-id"}>#{id} </span>
                <span className={"pokemon-detail-name"}>{capitalizedName}</span>
            </div>
            <img className={"pokemon-detail-sprite"} alt={name + " sprite."} src={sprite}/>
            <span className={"pokemon-detail-weight " + weightClass}>{roundedWeight} KG</span>
            <span><Types firstType={types[0]} secondType={types[1]}/></span>
            <div className={"pokemon-stats-block"}>
                <label>HP</label>
                <progress style={{accentColor: "#FF5959"}} max={maxStat} value={stats.hp}>{stats.hp}</progress>
                <label>Attack</label>
                <progress style={{accentColor: "orange"}} max={maxStat} value={stats.attack}>{stats.attack}</progress>
                <label>Defense</label>
                <progress style={{accentColor: "lightyellow"}} max={maxStat}
                          value={stats.defense}>{stats.defense}</progress>
                <label>Sp. Attack</label>
                <progress style={{accentColor: "lightblue"}} max={maxStat}
                          value={stats.spattack}>{stats.spattack}</progress>
                <label>Sp. Defense</label>
                <progress style={{accentColor: "lightgreen"}} max={maxStat}
                          value={stats.spdefense}>{stats.spdefense}</progress>
                <label>Speed</label>
                <progress style={{accentColor: "pink"}} max={maxStat} value={stats.speed}>{stats.speed}</progress>
            </div>
            <span className={"pokemon-detail-total-stats"}>{totalStats}</span>
            
        </div>
    );
};

function getClassByWeight(weight) {
    switch (true) {
        case weight < 10:
            return "tier0";
        case weight >= 10 && weight < 25:
            return "tier1";
        case weight >= 25 && weight < 50:
            return "tier2";
        case weight >= 50 && weight < 100:
            return "tier3";
        case weight >= 100 && weight < 200:
            return "tier4";
        case weight >= 200 :
            return "tier5";
    }
}