"use client";

import { motion } from "framer-motion";
import { Briefcase, Send, ArrowLeft } from "lucide-react";
import { useTheme } from "@/shared/contexts/theme-context";
import { useRouter } from "next/navigation";

export function CareersPage() {
  const { currentTheme } = useTheme();
  const router = useRouter();

  return (
    <div 
      className="min-h-screen relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <button
        onClick={() => router.back()}
        className="fixed left-4 top-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full shadow-md"
        style={{ backgroundColor: currentTheme.colors.backgroundSecondary, color: currentTheme.colors.textPrimary }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 -bottom-10 right-10"
          style={{ backgroundColor: currentTheme.colors.accentPrimary }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex justify-center gap-2 mb-4 items-center"
          >
            <div className="h-px w-8" style={{ backgroundColor: currentTheme.colors.accentPrimary }} />
            <span style={{ color: currentTheme.colors.accentPrimary }}>◆</span>
            <div className="h-px w-8" style={{ backgroundColor: currentTheme.colors.accentPrimary }} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            Careers at ISOLELE Universe
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            Build the First Pan-African Superhero Universe
          </motion.p>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border shadow-md"
            style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}80`, borderColor: `${currentTheme.colors.accentPrimary}30` }}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: currentTheme.colors.textPrimary }}>ISOLELE Universe is not a studio chasing a trend. We are building an original mythology rooted in Kongo cosmology, from the ground up, across comics, games, film, and cultural products. Our tagline says it plainly: Everything Begins in Kongo.</h3>
            <p className="leading-relaxed mb-4" style={{ color: currentTheme.colors.textSecondary }}>
              We are a global team working across Kinshasa, Goma, Bukavu, Los Angeles, and beyond. Some of our illustrators create pages under conditions most studios will never understand. We build anyway, because the story matters more than the obstacles.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: currentTheme.colors.textSecondary }}>
              If you want your work to mean something bigger than a paycheck, we want to hear from you.
            </p>

            <h4 className="font-semibold mt-4 mb-2" style={{ color: currentTheme.colors.accentPrimary }}>Why ISOLELE</h4>
            <ul className="list-disc list-inside mb-4" style={{ color: currentTheme.colors.textSecondary }}>
              <li>Original IP, not licensed work. Every character, every world, every story is ours from the first sketch.</li>
              <li>Real cultural weight. Our universe is built on Kongo heritage, royal history, and ancestral cosmology, not a surface-level aesthetic.</li>
              <li>A growing portfolio across comics, games, and cultural products.</li>
              <li>A mission beyond the work. Through Bana ya ISOLELE, we run literacy and arts programs for children in Goma and Kinshasa.</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2" style={{ color: currentTheme.colors.accentPrimary }}>Open Roles</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <h5 className="font-bold">Creative</h5>
                <ul className="list-disc list-inside" style={{ color: currentTheme.colors.textSecondary }}>
                  <li>Illustrators & Character Artists</li>
                  <li>Comic Letterers</li>
                  <li>Concept Artists</li>
                  <li>Colorists</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold">Technical</h5>
                <ul className="list-disc list-inside" style={{ color: currentTheme.colors.textSecondary }}>
                  <li>Web & App Developers</li>
                  <li>E-commerce / Platform Engineers</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold">Business & Operations</h5>
                <ul className="list-disc list-inside" style={{ color: currentTheme.colors.textSecondary }}>
                  <li>Production Coordinators</li>
                  <li>Partnerships & Licensing</li>
                  <li>Marketing & Social Media</li>
                </ul>
              </div>
            </div>

            <p className="mb-6" style={{ color: currentTheme.colors.textSecondary }}>Don’t see your exact fit listed? If you believe in what we’re building, reach out anyway. We’ve built this universe with people who found us, not just people we found.</p>

            <h4 className="font-semibold mt-4 mb-2" style={{ color: currentTheme.colors.accentPrimary }}>How to Apply</h4>
            <p className="leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
              Send your portfolio, resume, or a short note about why ISOLELE speaks to you to:
            </p>
            <a className="inline-block mt-3 px-5 py-3 rounded-xl font-bold" href="mailto:empire@isoleleuniverse.com" style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}>empire@isoleleuniverse.com</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border shadow-md text-center"
            style={{ backgroundColor: `${currentTheme.colors.backgroundSecondary}60`, borderColor: `${currentTheme.colors.accentPrimary}20` }}
          >
            <Briefcase className="w-12 h-12 mx-auto mb-4" style={{ color: currentTheme.colors.accentPrimary }} />
            <h3 className="text-2xl font-bold mb-2" style={{ color: currentTheme.colors.textPrimary }}>Want to reach us directly?</h3>
            <p className="mb-4" style={{ color: currentTheme.colors.textSecondary }}>Email talents@isolele.com with the role you're interested in and portfolio samples (if applicable).</p>
            <a href="mailto:talents@isoleleuniverse.com" className="inline-block px-6 py-3 rounded-xl font-bold" style={{ backgroundColor: currentTheme.colors.accentPrimary, color: currentTheme.colors.background }}>Email Talents</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
