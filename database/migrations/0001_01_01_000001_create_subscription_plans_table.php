<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();
            $table->string('plan_name');
            $table->integer('max_profiles');
            $table->timestamps();
        });

        DB::table('subscription_plans')->insert([
            ['plan_name' => 'Basic Plan', 'max_profiles' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['plan_name' => 'Premium Plan', 'max_profiles' => 5, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscription_plans');
    }
};
