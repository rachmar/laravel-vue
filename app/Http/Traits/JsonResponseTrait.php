<?php

namespace App\Http\Traits;

use Illuminate\Http\JsonResponse;

trait JsonResponseTrait
{   
    public function successResponse(array $data, int $statusCode = 200): JsonResponse
    {   
    	$response = [
            'data' => $data,
        ];

        return response()->json($response, $statusCode);
    }

    public function errorResponse(string $message, int $statusCode = 404, array $additionalErrors = []): JsonResponse
    {   
    	$response = [
            'message' => $message,
        ];

        if(!empty($additionalErrors)){
            $response['errors'] = $additionalErrors;
        }
        
        return response()->json($response, $statusCode);
    }

}