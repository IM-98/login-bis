interface Message {
    imageUrl: string,
    name: string,
    message: string,
    hour: string
}

export interface MessageAPI {

   comments : Array<MessageType>
   limit: number,
   skip: number,
   total: number

}

export interface MessageType{
    id: string,
    body: string,
    postId: number,
    user: {
        id: number,
        username: string
    }
}



const Message: Message[] = [
    {
        imageUrl: "/assets/ahmed.png",
        name: "Amhed",
        message: "Hello everyone!",
        hour: "9:15pm"
    },
    {
        imageUrl: "/assets/claudia.png",
        name: "Claudia",
        message: "Hello everyone!",
        hour: "9:15pm"
    },
    {
        imageUrl: "/assets/Killian.png",
        name: "Killian",
        message: "Hello everyone!",
        hour: "9:15pm"
    },
    {
        imageUrl: "/assets/novita.png",
        name: "Novita",
        message: "Hello everyone!",
        hour: "9:15pm"
    },
    {
        imageUrl: "/assets/design.png",
        name: "John",
        message: "Hello everyone!",
        hour: "9:15pm"
    },
    {
        imageUrl: "/assets/milie.png",
        name: "Millie",
        message: "Hello everyone!",
        hour: "9:15pm"

    },
    {
        imageUrl: "/assets/Ikhsan.png",
        name: "Ikhsan",
        message: "Hello everyone!",
        hour: "9:15pm"

    },
    {
        imageUrl: "/assets/Aditya.png",
        name: "Aditya",
        message: "Hello everyone!",
        hour: "9:15pm"

    },


]

export default Message
