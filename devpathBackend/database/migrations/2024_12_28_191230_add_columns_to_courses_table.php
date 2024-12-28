<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            // Add learning outcomes column
            $table->text('learning_outcomes')->nullable()->after('category');
            $table->integer('lectures')->nullable()->after('learning_outcomes');
            $table->integer('quizzes')->nullable()->after('lectures');
            $table->string('language')->nullable()->after('quizzes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            //
        });
    }
};
