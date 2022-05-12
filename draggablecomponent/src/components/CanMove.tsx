export const CanMoveFunc = (x:number, y:number) => {
    if (750 < x && x < 1550 && 100 < y && y < 900){
        return true
    } else{
        return false
    }
}