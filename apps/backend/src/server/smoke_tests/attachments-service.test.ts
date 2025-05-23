import { AttachmentService, AttachmentsTypeInput } from "../../modules/management/services/attachments.service";
import { AppDataSource } from "../config/datasource";

async function testAttachmentService() {
    console.log("Attachments type service initialized");

    const attachmentService = new AttachmentService();

    try {
        console.log("------ 1° Test: Create Attachment ------");

        const input: AttachmentsTypeInput = {
            address: 'C:\Users\HCANDIDO\OneDrive - Embraer\Desktop\devtasks',
        }

        const res = await attachmentService.create(input);

        if (res)
            console.log("1° Test ran successfully");
        else {
            console.error("1° Test failed");
            return;
        }

        // ------------------------------------------------------------------------------

        console.log("------ 2° Test: Get All Attachments ------");

        const all = await attachmentService.getAll();

        if (all.length == 0) {
            console.log("2° Test failed")
            return;
        }

        console.log("2° Test ran successfully");

        // ------------------------------------------------------------------------------

        console.log("------ 3° Test: Delete Attachment ------");

        await attachmentService.delete(res.id);

        console.log("3° Test ran successfully")

        console.log("------ All Tests Passed ------");
    } catch (err: any) {
        console.error("General Error on Attachments Service Test: ", err);
        return;
    }
}

export async function startAttachmentTestServer() {
    try {
        await AppDataSource.initialize();
        console.log("SQLite3 connected");

        await testAttachmentService();

        await AppDataSource.destroy();
    } catch (err: any) {
        console.error("Start Attachment Test Server Failed: ", err);
        process.exit(1);
    }
}