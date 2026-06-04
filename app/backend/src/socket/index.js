export const initSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('join:restro', (restroid) => {
      socket.join(`restro:${restroid}`);
    });

    socket.on('join:table', ({ restroid, tableid }) => {
      socket.join(`table:${restroid}:${tableid}`);
    });

    socket.on('disconnect', () => {});
  });
};

export const emitNewOrder = (io, restroid, order) => {
  io.to(`restro:${restroid}`).emit('order:new', order);
};

export const emitOrderUpdate = (io, restroid, order) => {
  io.to(`restro:${restroid}`).emit('order:updated', order);
};

export const emitWaiterCall = (io, restroid, tableid) => {
  io.to(`restro:${restroid}`).emit('waiter:called', { tableid });
};
