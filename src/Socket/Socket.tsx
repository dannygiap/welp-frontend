import io from 'socket.io-client';

class Socket {
  static socket: SocketIOClient.Socket;

  public static initializeSocket(gameID: string): void {
    this.socket = io('http://localhost:4000/', {
      transports: ['websocket'],
      query: `gameID=${gameID}`,
    });
  }

  public static getSocket(): SocketIOClient.Socket {
    return this.socket as SocketIOClient.Socket;
  }
}
export default Socket;
