package net.cs699.restaurant_app_backend.exception;

public class ResourceNotFoundException extends RuntimeException{

    public  ResourceNotFoundException(String message){
        super(message);
    }
}
