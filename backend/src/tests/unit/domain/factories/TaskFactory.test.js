const Task = require('../../../../app/domain/entities/Task');
const TaskFactory = require('../../../../app/domain/factories/TaskFactory');

test('test it should returns Task instance from factory build', () => {
    const result = TaskFactory.create(
        { description: 'fake-description' }
    );

    expect(result).toBeInstanceOf(Task);
    expect(result.uuid).toBeDefined();
    expect(result.description).toBeDefined();
    expect(result.createdAt).toBeDefined();
});
