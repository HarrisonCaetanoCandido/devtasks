import { TaskTypeService, TaskTypeInput, UpdateTaskTypeInput } from "../../modules/management/services/task.service";
import { AppDataSource } from "../config/datasource";

async function testTaskService() {
    console.log("Task type service initializing");

    console.log('------ 1° Test: Create Task ------');
    const task = new TaskTypeService();

    try {
        const data: TaskTypeInput = {
            title: 'Card 1',
            description: 'Describing something here, just to see what we got',
            due_date: new Date()
        };

        try {
            var newTask = await task.create(data);

            if (!newTask) {
                console.error("1° Test failed");
                return
            } else
                console.log("1° Test ran successfully");
        } catch (err: any) {
            console.error("Critical error above Test 1°: ", err);
            return;
        }

        // ------------------------------------------------------------------------------

        console.log('------ 2° Test: Duplicate Task ------');

        try {
            await task.create(data);
            console.error("2° Test failed");
            return;
        } catch (err: any) {
            console.log("2° Test ran successfully");
        }

        // ------------------------------------------------------------------------------

        console.log("------ 3° Test: Upload Task ------");

        try {
            const updateData: UpdateTaskTypeInput = {
                id: newTask.id,
                title: 'Card 10 NOW',
                description: 'i CHANGED HERE',
                due_date: new Date()
            }

            let res = await task.update(updateData);

            if (res)
                console.log("3° Test ran successfully");
            else
                console.error("3° Test failed");

        } catch (err: any) {
            console.error("Critical error above Test 3°: ", err);
            return;
        }

        // ------------------------------------------------------------------------------

        console.log("------ 4° Test: Get All Tasks ------")

        try {
            let data = await task.getAll();
            if (data)
                console.log("4° Test ran successfully");
            else
                console.error("4° Test failed");
        } catch (err: any) {
            console.error("Critical error above Test 4°: ", err);
            return;
        }

        // ------------------------------------------------------------------------------

        console.log("------ 5° Test: Delete Task ------");

        try {
            await task.delete(newTask.id);
            console.log("5° Test ran successfully");
        } catch (err: any) {
            console.error("5° Test failed");
            return;
        }

        // ------------------------------------------------------------------------------
        console.log("------ All Tests Passed ------");
    } catch (err: any) {
        console.error("General Error on Status Service Test: ", err);
        return;
    }
}

export async function startTaskTestServer() {
    try {
        await AppDataSource.initialize();
        console.log("SQLite3 was connected");

        await testTaskService();

        await AppDataSource.destroy();
    } catch (err: any) {
        console.error("Start Task Test Server Failed: ", err);
        process.exit(1);
    }
}