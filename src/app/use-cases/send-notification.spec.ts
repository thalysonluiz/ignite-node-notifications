import { Notification } from './../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notifications', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: '123',
    });

    expect(notifications).toHaveLength(1);
  });
});
