package com.anonymous.mainagenttestapp

import android.os.Handler
import android.os.Looper
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CrashModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "CrashModule"
    @ReactMethod
    fun createCrashEvent(name: String, location: String): String {
        Log.d("CrashModule", "Crash event with name: $name and location: $location")

        val exception = RuntimeException("$location Crash")
        val mainLooper = Looper.getMainLooper().thread
        val mainHandler = Handler(Looper.getMainLooper())

        if (name == "crash") {
            mainLooper.uncaughtExceptionHandler?.uncaughtException(mainLooper, exception)
            mainLooper.join(500L)
        } else if (name == "anr") {
            // create a lock for the thread
            val blocker = Any()
            Thread {
                // control access to the thread with the lock
                synchronized(blocker) {
                    while (true) {
                        try {
                            // put the thread to sleep for more than 5 seconds
                            Thread.sleep(10000)
                        } catch (e: InterruptedException) {
                            e.printStackTrace()
                        }
                    }
                }
            }.start()
            // try to access the thread while its asleep
            mainHandler.postDelayed({
                synchronized(blocker) {
                    throw IllegalStateException()
                }
            }, 1000)
            Log.d("ANR", "In progress")
        }
        return "Success"
    }
}
