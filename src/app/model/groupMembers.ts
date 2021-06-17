export class GroupMembers{
    groupMemberId:number;
    // get from security db userid
    memberId:string;
    groupId:number;
    ownerId:number;
    public id:number=0;
    constructor(){
        this.groupMemberId=0;
        this.memberId='';
        this.groupId=0;
        this.ownerId=0;
    }
}