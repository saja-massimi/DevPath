<?php

namespace App\Services;

use Google\Client;
use Google\Service\Drive;

class GoogleDriveService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client();
        $this->client->setAuthConfig(env('GOOGLE_CREDENTIALS_PATH', storage_path('app/credentials.json')));
        $this->client->addScope(Drive::DRIVE_FILE);
    }

    public function uploadFile($file, $title)
    {
        $service = new Drive($this->client);
        $fileMetadata = new Drive\DriveFile(['name' => $title]);
        $content = file_get_contents($file);

        $uploadedFile = $service->files->create($fileMetadata, [
            'data' => $content,
            'mimeType' => mime_content_type($file),
            'uploadType' => 'multipart',
        ]);

        return $uploadedFile->id;
    }
}
