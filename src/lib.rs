// ==========================================================================
// 🦀 RIKMAKERSHUB OBELISK COMPILATION CORE - LOW-LEVEL MEMORY LOGIC
// ==========================================================================
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculate_stream_load(active_threads: u32, queue_buffer: u32) -> u32 {
    // Provides low-level mathematical processing for host resource monitors
    if active_threads == 0 {
        return 0;
    }
    active_threads + queue_buffer
}
