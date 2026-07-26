import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'VMware to Hyper-V Migration - 60% Lower Virtualization Costs',
  description:
    'How W1IT migrated 40 production VMs from VMware vSphere to Hyper-V after a 3x licensing renewal, cutting virtualization costs 60% with under 15 minutes of downtime per VM.',
  keywords: [
    'VMware to Hyper-V migration',
    'VMware alternatives',
    'Broadcom VMware licensing',
    'Hyper-V migration services',
    'virtualization cost reduction',
    'Seattle virtualization consulting',
  ],
  canonical: '/case-studies/vmware-to-hyperv-migration',
  openGraph: {
    title: 'VMware to Hyper-V Migration Case Study',
    description:
      '40 production VMs migrated off VMware after a 3x renewal quote - 60% lower costs, zero data loss.',
    type: 'article',
  },
});

export default function VmwareToHypervMigration() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li className="text-fg-subtle">/</li>
          <li><Link href="/case-studies" className="text-blue-600 hover:underline">Case Studies</Link></li>
          <li className="text-fg-subtle">/</li>
          <li className="text-fg-muted">VMware to Hyper-V Migration</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Virtualization
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Cost Optimization
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Migration
            </span>
            <span className="text-fg-muted">• July 20, 2026</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            VMware to Hyper-V Migration: Escaping a 3x Licensing Renewal Without Losing a Byte
          </h1>

          <p className="text-xl text-fg-muted mb-8">
            When a distribution company&apos;s VMware renewal came back at three times the previous
            price, they had 90 days to decide: pay, or move. W1IT migrated all 40 production VMs
            to Microsoft Hyper-V in six weeks — with under 15 minutes of downtime per workload
            and a 60% reduction in three-year virtualization costs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface-1 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Client:</span>
                  <span>Regional Distribution Company</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Industry:</span>
                  <span>Wholesale &amp; Logistics</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Environment:</span>
                  <span>3 hosts, 40 VMs, 28 TB</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>6 weeks</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Trigger:</span>
                  <span>3x VMware renewal quote</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-1 p-6 rounded-lg border border-brand-green/30">
              <h3 className="text-xl font-semibold mb-4">Key Results</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">3-Year Virtualization TCO:</span>
                  <span className="text-brand-green font-semibold">-60%</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Downtime per VM:</span>
                  <span className="text-brand-green font-semibold">&lt; 15 min</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Data Loss:</span>
                  <span className="text-brand-green font-semibold">Zero</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Backup RPO:</span>
                  <span className="text-brand-green font-semibold">Unchanged (15 min)</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Rollback Events:</span>
                  <span className="text-brand-green font-semibold">1 (planned, recovered)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">The Challenge: A Renewal That Changed the Math</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              For years, the client&apos;s three-host vSphere cluster had been the safe, boring choice —
              exactly what production virtualization should be. Then the renewal quote arrived:
              per-core subscription licensing had replaced their perpetual licenses, and the
              three-year cost had roughly tripled. For a 40-VM environment running standard Windows
              and Linux workloads, the premium no longer bought anything they used.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The client asked us the right question: not &quot;how do we leave VMware?&quot; but
              &quot;what is the cheapest platform that runs our workloads at the same reliability?&quot;
              We modeled three options — renewing, moving to Hyper-V, and moving to Proxmox.
              Because every host already ran Windows Server Datacenter (which includes Hyper-V and
              unlimited Windows guest licensing), Hyper-V won on licensing they already owned,
              admin skills they already had, and native compatibility with their Veeam backup estate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Approach: Assess, Pilot, Then Move in Waves</h2>
            <div className="space-y-6">
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Week 1-2: Assessment &amp; Dependency Mapping</h3>
                <p className="text-fg-muted leading-relaxed">
                  Full inventory of all 40 VMs: OS versions, vCPU/RAM/storage footprints, VMware Tools
                  dependencies, snapshot debt, and application interdependencies. Each VM was assigned
                  to a migration wave based on risk — file and print servers first, the ERP database last.
                  Two VMs with hard vSphere dependencies were flagged for rebuild instead of conversion.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Week 3: Pilot Cluster &amp; Backup Continuity</h3>
                <p className="text-fg-muted leading-relaxed">
                  We rebuilt one freed-up host as a Hyper-V node with Switch Embedded Teaming matching
                  the existing VLAN design, then used Veeam&apos;s restore-to-Hyper-V capability to migrate
                  pilot VMs directly from existing backups — proving the conversion path and validating
                  that backup jobs, RPOs, and restore tests carried over unchanged.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Week 4-6: Production Waves</h3>
                <p className="text-fg-muted leading-relaxed">
                  Three overnight migration windows, roughly a dozen VMs each: final incremental backup,
                  restore to Hyper-V, swap VMware Tools for Hyper-V integration services, re-IP checks,
                  and application smoke tests signed off by department owners before morning. One ERP
                  reporting VM failed its smoke test and was rolled back to vSphere in 20 minutes as
                  planned — the driver issue was fixed and it migrated cleanly in the final wave.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Results</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              The final vSphere host was decommissioned seven weeks after kickoff. Licensing spend
              dropped to the Windows Server Datacenter subscriptions the client already carried, plus
              existing Veeam licensing — a 60% reduction in three-year virtualization TCO. Management
              moved to Windows Admin Center and Hyper-V Manager, tools the internal team already knew.
            </p>
            <p className="text-fg-muted leading-relaxed">
              Just as important is what didn&apos;t change: backup RPO stayed at 15 minutes, monthly
              restore testing continued uninterrupted, and end users never noticed the platform swap.
            </p>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Is a VMware Exit Right for You?</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Honest answer: not always. If you rely on vSAN, NSX, DRS at scale, or a large VDI estate,
              staying on VMware (or a more deliberate multi-year transition) can be the better call.
              But if your environment is standard Windows/Linux server workloads and your renewal has
              multiplied, Hyper-V or Proxmox usually delivers the same reliability for a fraction of
              the cost — especially when you already pay for Windows Server Datacenter.
            </p>
            <p className="text-fg-muted leading-relaxed">
              We start every engagement with a licensing and workload assessment that gives you the
              real numbers for each path — renew, migrate, or hybrid — before anything is touched.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Facing a VMware Renewal?</h2>
            <p className="text-fg-muted mb-6 max-w-2xl mx-auto">
              Get a fixed-scope migration assessment: workload inventory, licensing cost comparison,
              and a wave-by-wave migration plan with rollback built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2968D8] transition-colors"
              >
                Request a Migration Assessment
              </Link>
              <Link
                href="/case-studies"
                className="border border-line text-fg px-8 py-3 rounded-lg font-semibold hover:bg-surface-1 transition-colors"
              >
                More Case Studies
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
