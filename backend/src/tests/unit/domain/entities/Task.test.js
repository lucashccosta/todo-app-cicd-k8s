const Task = require('../../../../app/domain/entities/Task');

test('test it should returns Task instance from constructor', () => {
    const result = new Task(
        'fake-uuid',
        'fake-description',
        'fake-created-date'
    );

    expect(result).toBeInstanceOf(Task);
});
