import { CreateStatusTypeInputSchema, StatusTypeService } from "../../modules/management/services/status.service";
import { AppDataSource } from "../config/datasource";

async function testStatusService() {
    console.log("Status type service initializing");

    const statusService = new StatusTypeService();

    try {
        console.log("--- 1° Test: Create Status ---");
        const inputData = { status: 'Pendente - Teste' };
        const result = CreateStatusTypeInputSchema.safeParse(inputData);

        if (!result.success) {
            console.error("Zod validation error: ", result.error.flatten());
            return;
        }

        const newStatus = await statusService.create(result.data);
        console.log("Status created: ", newStatus);

        // ------------------------------------------------------------------------------

        console.log("--- 2° Test: Create Duplicate Status ---");
        try {
            await statusService.create(result.data);
        } catch (e: any) {
            console.warn("Duplicate status type");
        }

        // ------------------------------------------------------------------------------

        console.log('--- 3° Test: List All Status ---');
        const allStatus = await statusService.getAll();
        console.log("All status: ", allStatus);

        // ------------------------------------------------------------------------------

        if (newStatus && newStatus.id) {
            console.log(`--- 4° Test: Search ID Status ${newStatus.id}---`);
            const foundStatus = await statusService.getById(newStatus.id);
            if (foundStatus) {
                console.log("Status find by ID: ", foundStatus)
            } else {
                console.error(`Status with ID ${newStatus.id} not found`);
            }
        }

        // ------------------------------------------------------------------------------

        console.log(`--- 5° Test: Update Status with ID ${newStatus.id}`);
        const updateStatus = await statusService.update({
            id: newStatus.id,
            status: 'Status Alterado',
        })
        console.log("Updated Status: ", updateStatus);

        // ------------------------------------------------------------------------------

        console.log(`--- 6° Test: Delete Status ${newStatus.id} ---`);
        await statusService.delete(newStatus.id);
        console.log(`Status with ID ${newStatus.id} was deleted`);

        const deletedStatus = await statusService.getById(newStatus.id);
        if (!deletedStatus)
            console.log("The Status was deleted successfully");
        else
            console.error("The Status was not deleted successfully");

        // ------------------------------------------------------------------------------
    } catch (err: any) {
        console.error("General Error on Status Service Test: ", err);
        return;
    }

    console.log("------ All Tests Passed ------");
}

export async function startStatusTestServer() {
    try {
        await AppDataSource.initialize();
        console.log("SQLite3 database connected");

        await testStatusService();

        await AppDataSource.destroy();

    } catch (err: any) {
        console.error("Start Status Test Server Failed: ", err);
        process.exit(1);
    }
}